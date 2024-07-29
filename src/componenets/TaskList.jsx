import React,{useState} from "react";
import TaskItem from "./TaskItem";
import SearchBar from './SearchBar'
function TaskList({
  tasks,
  toggleComplete,
  updateTask,
  deleteHandle,
  onSearch,
}) {
  return (
    <div>
      <div className="search_bar_header">
        <span>Search Item</span>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            updateTask={updateTask}
            deleteHandle={deleteHandle}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
