import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from "@mui/material";

const TaskDialog = ({ open, onClose, taskToEdit, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setDescription(taskToEdit.desc);
      setPriority(taskToEdit.priority);
      setError(false);
    } else {
      setTaskName("");
      setDescription("");
      setPriority(1);
      setError(false);
    }
  }, [taskToEdit]);

  const handleSave = () => {
    if (
      taskName.trim() === "" ||
      taskDescription.trim() === "" ||
      priority.trim() === ""
    ) {
      setError(true);
      console.log("error", priority);
      return;
    }
    const task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      name: taskName,
      desc: taskDescription,
      priority,
      completed: taskToEdit ? taskToEdit.completed : false,
      creationDate: taskToEdit ? taskToEdit.creationDate : new Date(),
    };
    onSave(task);
    onClose();
    console.log("omg");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{taskToEdit ? "Edit Task" : "Add New Task"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Task Name"
          fullWidth
          required
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          margin="normal"
          className="bg-white border-gray-300 rounded-md shadow-sm"
          error={error}
          helperText={error ? "Task name cannot be empty" : ""}
        />
        <TextField
          label="Task Description"
          fullWidth
          required
          multiline
          rows={4}
          value={taskDescription}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          className="bg-white border-gray-300 rounded-md shadow-sm"
          error={error}
          helperText={error ? "Task description cannot be empty" : ""}
        />
        <FormControl
          fullWidth
          margin="normal"
          className="bg-white border-gray-300 rounded-md shadow-sm"
          error={error}
          helperText={error ? "Task Priority cannot be empty" : ""}
        >
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <MenuItem value={"High"}>High Priority</MenuItem>
            <MenuItem value={"Medium"}>Medium Priority</MenuItem>
            <MenuItem value={"Low"}>Low Priority</MenuItem>
          </Select>
          {error && (
            <FormHelperText>Task Priority cannot be empty</FormHelperText>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          {taskToEdit ? "Update Task" : "Add Task"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDialog;
