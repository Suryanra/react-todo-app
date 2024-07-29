import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

function TaskItem({ task, toggleComplete, updateTask, deleteHandle }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleComplete = () => {
    toggleComplete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      lastUpdated: new Date().toLocaleString(), 
    };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-header">
        <div className="title_in_list">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleComplete}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            <span  onClick={handleExpand}>{task.title}</span>
          )}
        </div>
        <div className="option_available">
          {isEditing ? (
            <>
              <span onClick={handleSave}>Save</span>
              <span onClick={handleCancel}>Cancel</span>
            </>
          ) : (
            <>
              <span onClick={handleEdit}>
                <MdEdit />
              </span>
              <span onClick={() => deleteHandle(task.id)}>
                <MdDelete />
              </span>
            </>
          )}
        </div>
      </div>
      {(isExpanded || isEditing) && (
        <div className="task-details">
          {isEditing ? (
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          ) : (
            <>
              <p>{task.description}</p>
              <p className="datetime-p">Last updated: {task.lastUpdated}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskItem;
