import { createStore } from "redux";
import tasksReducer from "./reducers/tasks-reducer";

//STORE
const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
