import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, onEditTask }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    if (destination.index === source.index) return;

    const reorderedTasks = Array.from(taskList);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);

    setTaskList(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="task-list" direction="vertical">
        {(provided) => (
          <div
            className="flex flex-wrap gap-8 justify-center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskList.length === 0 && (
              <h1 className="text-2xl font-mono font-bold">
                No Task Available.
              </h1>
            )}
            {taskList.map((task, index) => (
              <Draggable
                draggableId={task.id.toString()}
                index={index}
                key={task.id}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskItem
                      task={task}
                      onEdit={onEditTask}
                      onDelete={deleteTask}
                      onToggleCompletion={toggleTaskCompletion}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
