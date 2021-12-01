import TasksConstants from "../constants/tasks-constants";

const removeTask = (ind) => {
  return { index: ind, type: TasksConstants.REMOVE_TASK };
};

export default removeTask;
