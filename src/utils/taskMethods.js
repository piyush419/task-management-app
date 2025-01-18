export const saveTask = (tasks, task) => {
  if (tasks.some((t) => t.id === task.id)) {
    return tasks.map((t) => (t.id === task.id ? task : t));
  } else {
    return [...tasks, task];
  }
};

export const deleteTask = (tasks, taskId) => {
  return tasks.filter((task) => task.id !== taskId);
};

export const toggleTaskCompletion = (tasks, taskId) => {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
};
