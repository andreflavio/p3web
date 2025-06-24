/*
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddCategory from './components/AddCategory';
import AddTask from './components/AddTask';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <TaskProvider>
      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>
          Gerenciador de Tarefas por Categoria
        </h1>
        <AddCategory />
        <AddTask />
        <CategoryList />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
*/


import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddCategory from './components/AddCategory';
import AddTask from './components/AddTask';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <TaskProvider>
      <div style={{
        maxWidth: '700px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // Espaçamento entre os componentes filhos
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#2c3e50',
          marginBottom: '30px',
          fontSize: '2rem',
          fontWeight: '600',
        }}>
          Gerenciador de Tarefas por Categoria
        </h1>
        <AddCategory />
        <AddTask />
        <CategoryList />
        <TaskList />
      </div>
    </TaskProvider>
  );
}