import TasksConstants from "../constants/tasks-constants";
const addTask = (task) => {
  return { task: task, type: TasksConstants.ADD_TASK };
};
export default addTask;
