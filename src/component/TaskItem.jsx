import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ task, onEdit, onDelete, onToggleCompletion }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 360,
        borderRadius: 3,
        boxShadow: 5,
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 15,
        },
      }}
    >
      <CardContent>
        <div className="flex items-center justify-between">
          <Typography gutterBottom variant="h5" component="div">
            {task.name.toUpperCase()}
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(`/task-details/${task.id}`)}
            startIcon={<VisibilityIcon />}
          >
            View
          </Button>
        </div>
        {task.priority.toLowerCase() === "low" ? (
          <Chip label="Low" color="success" />
        ) : task.priority.toLowerCase() === "medium" ? (
          <Chip label="Medium" color="warning" />
        ) : (
          <Chip label="High" color="error" />
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => onToggleCompletion(task.id)}
          startIcon={
            task.completed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />
          }
          color={task.completed ? "success" : "error"}
        >
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </Button>
        <Button
          size="small"
          onClick={() => onEdit(task)}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => onDelete(task.id)}
          startIcon={<DeleteIcon />}
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
