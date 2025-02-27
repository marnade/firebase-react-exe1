import "../css/taskManager.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import AddTask from "./AddTask";

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskColRef = query(
      collection(db, "tasks"),
      orderBy("created", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      let liste = [];
      console.log(snapshot);
      console.log(snapshot.docs);
      snapshot.docs.map((doc) => {
        console.log('hey');
        liste.push({
          id: doc.id,
          data: doc.data()
        });
      });
      setTasks(liste);
    });
    //getDocs(taskColRef);
    // console.log(taskColRef);
  }, []);
  // console.log(tasks);
  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div className="taskManager__container">
        <button onClick={() => setOpenAddModal(true)}>Add task +</button>
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title}
              description={task.data.description}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager;
