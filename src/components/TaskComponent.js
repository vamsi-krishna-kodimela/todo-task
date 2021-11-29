import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import updateTask from "../actions/update-task";
import removeTask from "../actions/remove-task";

const TaskComponent = (props) => {
  const [task, setTask] = useState(...props.task);
  const [editMode, setEditMode] = useState(false);
  const index = props.index;
  const dispatch = useDispatch();
  return (
    <div className="task">
      {editMode ? (
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      ) : (
        <p>{task}</p>
      )}

      <button
        onClick={() =>
          editMode
            ? dispatch(updateTask(task, index)) && setEditMode(!editMode)
            : setEditMode(!editMode)
        }
      >
        {editMode ? "Save" : "Edit"}
      </button>
      <button onClick={() => dispatch(removeTask(index))}>X</button>
    </div>
  );
};

export default TaskComponent;
