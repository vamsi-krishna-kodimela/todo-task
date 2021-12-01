import TasksConstants from "../constants/tasks-constants";


const updateTask = (task, index) => {
  return {
    type: TasksConstants.UPDATE_TASK,
    index: index,
    task: task,
  };
};

export default updateTask;
