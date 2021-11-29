const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "REMOVE_TASK":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "UPDATE_TASK":
      return [
        ...state.slice(0, action.index),
        action.task,
        ...state.slice(action.index + 1),
      ];
    default:
      return [...state];
  }
};

export default tasks;
