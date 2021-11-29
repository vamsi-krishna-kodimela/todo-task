const removeTask = (ind) => {
  return { index: ind, type: "REMOVE_TASK" };
};

export default removeTask;
