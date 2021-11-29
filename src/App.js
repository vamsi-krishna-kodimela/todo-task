import "./App.css";
import CreateTaskComponent from "./components/CreateTaskComponent";
import TaskComponent from "./components/TaskComponent";
import { useSelector} from "react-redux";

function App() {
  const tasks = useSelector((state) => state);
  return (
    <div className="App container">
      <h1>TODO App</h1>
      <CreateTaskComponent />
      <div className="tasks-list">
        {tasks.map((tsk, ind) => (
          <TaskComponent
            task={tsk}
            index={ind}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
