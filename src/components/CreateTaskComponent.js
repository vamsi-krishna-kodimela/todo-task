import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addTask from "../actions/add-task";

const CreateTaskComponent = (props) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const submit = () => {
    setTask("");
    dispatch(addTask(task));
  };

  return (
    <div className="create-block">
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Task"
      />
      <button className="btn task-btn flex-auto" onClick={submit}>
        Add Task
      </button>
    </div>
  );
};

export default CreateTaskComponent;
