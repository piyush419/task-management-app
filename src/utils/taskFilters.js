export const filterTasks = (tasks, filter) => {
  if (filter === "All") return tasks;
  if (filter === "Completed") return tasks.filter((task) => task.completed);
  if (filter === "Incomplete") return tasks.filter((task) => !task.completed);
  return tasks;
};

export const sortTasks = (tasks, sortOrder) => {
  return tasks.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.creationDate) - new Date(b.creationDate);
    } else {
      return new Date(b.creationDate) - new Date(a.creationDate);
    }
  });
};
