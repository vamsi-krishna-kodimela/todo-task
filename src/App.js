import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTask = () => {
    setTask("");
    setTasks([task, ...tasks]);
  };

  const removeTask = (ind) => {
    tasks.splice(ind, 1);
    setTasks([...tasks]);
  };
  return (
    <div className="App container">
      <h1>TODO App</h1>
      <div className="create-block">
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Task"
        />
        <button className="btn task-btn flex-auto" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="tasks-list">
        {tasks.map((tsk, ind) => (
          <div className="task" key={ind}>
            <p>{tsk}</p>
            <button onClick={() => removeTask(ind)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
