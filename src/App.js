import "./App.css";
import CreateTaskComponent from "./components/CreateTaskComponent";
import TaskComponent from "./components/TaskComponent";
import { useSelector, useDispatch } from "react-redux";
import removeTask from "./actions/remove-task";

function App() {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App container">
      <h1>TODO App</h1>
      <CreateTaskComponent />
      <div className="tasks-list">
        {tasks.map((tsk, ind) => (
          <TaskComponent
            task={tsk}
            key={ind}
            removeTask={() => dispatch(removeTask(ind))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
