import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  saveTask,
  deleteTask,
  toggleTaskCompletion,
} from "../utils/taskMethods";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../utils/taskStorage";
import { filterTasks, sortTasks } from "../utils/taskFilters";
import TaskList from "../component/TaskList";
import TaskDialog from "../component/TaskDialog";
import Filter from "../component/Filter";
import Sort from "../component/Sort";
import { randomTasks } from "../randomdata";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {

    const savedTasks =
      getTasksFromLocalStorage().length != 0
        ? getTasksFromLocalStorage()
        : randomTasks;
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleDialogOpen = (task = null) => {
    setEditingTask(task);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditingTask(null);
  };

  const handleSaveTask = (task) => {
    const updatedTasks = saveTask(tasks, task); 
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = deleteTask(tasks, taskId); 
    setTasks(updatedTasks);
  };

  const handleToggleTaskCompletion = (taskId) => {
    const updatedTasks = toggleTaskCompletion(tasks, taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = filterTasks(tasks, filter);
  const sortedTasks = sortTasks(filteredTasks, sortOrder);

  return (
    <div>
      <div className="flex justify-between items-center my-5 flex-wrap">
        <div className="flex flex-wrap gap-5 mx-10">
          <h1 className="text-2xl font-serif font-bold">Task Manager</h1>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleDialogOpen()}
            startIcon={<AddIcon />}
          >
            Add Task
          </Button>
        </div>
        <div className="flex flex-wrap gap-5 mx-10">
          <Filter setFilter={setFilter} filter={filter} />
          <Sort setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </div>
      </div>

      <TaskList
        tasks={sortedTasks}
        deleteTask={handleDeleteTask}
        toggleTaskCompletion={handleToggleTaskCompletion}
        onEditTask={handleDialogOpen}
      />

      <TaskDialog
        open={openDialog}
        onClose={handleDialogClose}
        taskToEdit={editingTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default App;
