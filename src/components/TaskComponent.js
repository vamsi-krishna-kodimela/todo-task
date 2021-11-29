import React from "react";

const TaskComponent = (props) => {
  const task = props.task;
  return (
    <div className="task">
      <p>{task}</p>
      <button onClick={() => props.removeTask()}>X</button>
    </div>
  );
};

export default TaskComponent;
