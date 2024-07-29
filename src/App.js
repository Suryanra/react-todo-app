import React, { useState, useEffect } from 'react';
import './App.css';
import TaskItem from './componenets/TaskItem';
import TaskForm from './componenets/TaskForm'
import TaskList from './componenets/TaskList'
import { PiCourtBasketballDuotone } from 'react-icons/pi';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    } 
  }, []);

  const addTask = (newTask) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const toggleComplete = (taskId) => {
        // console.log(taskId)
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteHandle = (taskId) => {
    // console.log(taskId)
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      // console.log('deleted item',updatedTasks)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className='header'>ToDo App</div>
      <div className='app-container'>
        <TaskForm addTask={addTask} />
        <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} updateTask={updateTask} deleteHandle={deleteHandle} onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default App;
