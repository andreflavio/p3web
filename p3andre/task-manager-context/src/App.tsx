// src/App.jsx
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddCategory from './components/AddCategory';
import AddTask from './components/AddTask';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <TaskProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Gerenciador de Tarefas por Categoria</h1>
        <AddCategory />
        <AddTask />
        <CategoryList />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
