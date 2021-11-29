import React from "react";
import { useState } from "react";
const CreateTaskComponent = (props) => {
  const [task, setTask] = useState("");
  const addTask = () => {
    setTask("");
    props.addTask(task);
  };

  return (
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
  );
};

export default CreateTaskComponent;
