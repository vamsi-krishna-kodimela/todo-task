const updateTask = (task, index) => {
  return {
    type: "UPDATE_TASK",
    index: index,
    task: task,
  };
};

export default updateTask;
