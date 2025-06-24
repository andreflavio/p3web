/*import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addCategory = (name) => {
    if (name && !categories.includes(name)) {
      setCategories([...categories, name]);
    }
  };

  const addTask = (category, description) => {
    if (category && description) {
      const newTask = {
        id: Date.now(),
        category,
        description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ categories, tasks, addCategory, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
*/

import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addCategory = (name) => {
    if (name && !categories.includes(name)) {
      setCategories([...categories, name]);
    }
  };

  const addTask = (category, description) => {
    if (category && description) {
      const newTask = {
        id: Date.now(),
        category,
        description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ categories, tasks, addCategory, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);