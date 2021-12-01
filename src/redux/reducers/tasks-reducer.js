import TasksConstants from "../constants/tasks-constants";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case TasksConstants.ADD_TASK:
      return [action.task, ...state];
    case TasksConstants.REMOVE_TASK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case TasksConstants.UPDATE_TASK:
      return [
        ...state.slice(0, action.index),
        action.task,
        ...state.slice(action.index + 1),
      ];
    default:
      return [...state];
  }
};

export default tasksReducer;
