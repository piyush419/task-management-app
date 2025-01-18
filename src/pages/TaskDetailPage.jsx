import React from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { teal, red, amber, green, grey } from "@mui/material/colors";

import { useParams } from "react-router-dom";
import { getTasksFromLocalStorage } from "../utils/taskStorage";

const TaskDetails = () => {
  const { id } = useParams();
  const allTask = getTasksFromLocalStorage();
  const task = allTask.filter((task) => task.id == id)[0];
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        marginTop: 4,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        boxShadow: 5,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 15,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: teal[900],
            textAlign: "center",
            mb: 3,
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: 1.2,
            textTransform: "uppercase",
          }}
        >
          Task Details
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: teal[700],
                display: "inline-flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <PriorityHighIcon sx={{ color: teal[500], mr: 1 }} />
              Name:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 16, color: grey[800], lineHeight: 1.6 }}
            >
              {task.name}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: teal[700],
                display: "inline-flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <AccessTimeIcon sx={{ color: teal[500], mr: 1 }} />
              Description:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 16, color: grey[800], lineHeight: 1.6 }}
            >
              {task.desc}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: teal[700],
                display: "inline-flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <PriorityHighIcon sx={{ color: teal[500], mr: 1 }} />
              Priority Level:
            </Typography>
            <Chip
              label={task.priority}
              color={
                task.priority === "High"
                  ? "error"
                  : task.priority === "Medium"
                  ? "warning"
                  : "success"
              }
              size="small"
              sx={{
                marginLeft: 1,
                backgroundColor:
                  task.priority === "High"
                    ? red[500]
                    : task.priority === "Medium"
                    ? amber[600]
                    : green[500],
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: teal[700],
                display: "inline-flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <CheckCircleIcon sx={{ color: teal[500], mr: 1 }} />
              Status:
            </Typography>
            {task.completed ? (
              <Chip
                label="Completed"
                color="success"
                icon={<CheckCircleIcon />}
                size="small"
                sx={{
                  marginLeft: 1,
                  backgroundColor: green[600],
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              />
            ) : (
              <Chip
                label="Incomplete"
                color="error"
                icon={<HourglassEmptyIcon />}
                size="small"
                sx={{
                  marginLeft: 1,
                  backgroundColor: red[600],
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              />
            )}
          </Box>
        </Stack>

        <Divider sx={{ mt: 3, mb: 2, backgroundColor: grey[300], height: 2 }} />

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: grey[600],
            fontStyle: "italic",
            letterSpacing: 1,
            marginTop: 2,
          }}
        >
          Created on: {new Date(task.creationDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;
