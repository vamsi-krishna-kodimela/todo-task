import "./App.css";
import { useState } from "react";
import CreateTaskComponent from "./components/CreateTaskComponent";
import TaskComponent from "./components/TaskComponent";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const removeTask = (ind) => {
    tasks.splice(ind, 1);
    setTasks([...tasks]);
  };
  return (
    <div className="App container">
      <h1>TODO App</h1>
      <CreateTaskComponent addTask={addTask}/>
      <div className="tasks-list">
        {tasks.map((tsk, ind) => (
         <TaskComponent task={tsk} key={ind} removeTask={()=>removeTask(ind)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
