import { createStore } from "redux";

//STORE
// const tasks = [];

//ACTIONS
const addTask = (task) => {
  return { task: task, type: "ADD_TASK" };
};
const removeTask = (ind) => {
  return { index: ind, type: "REMOVE_TASK" };
};

//REDUCER
const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "REMOVE_TASK":
      return [...state.slice(action.index, 1)];
    default:
      return [...state];
  }
};

//STORE
let store = createStore(tasks);

//Print to console
// store.subscribe(() => console.log(store.getState()));

//DISPATCH
// store.dispatch(addTask("Task 1"));
