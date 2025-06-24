/*import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddTask() {
  const { categories, addTask } = useTasks();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(category, description.trim());
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ flex: 1 }}>
        <option value="">Selecionar categoria</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ flex: 2, padding: '5px' }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
*/

import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddTask() {
  const { categories, addTask } = useTasks();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(category, description.trim());
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      alignItems: 'center',
    }}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          flex: '1',
          padding: '10px',
          border: '1px solid #dfe6e9',
          borderRadius: '8px',
          fontSize: '1rem',
          outline: 'none',
          backgroundColor: '#ffffff',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => e.target.style.borderColor = '#3498db'}
        onBlur={(e) => e.target.style.borderColor = '#dfe6e9'}
      >
        <option value="">Selecionar categoria</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          flex: '2',
          padding: '10px',
          border: '1px solid #dfe6e9',
          borderRadius: '8px',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => e.target.style.borderColor = '#3498db'}
        onBlur={(e) => e.target.style.borderColor = '#dfe6e9'}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Adicionar
      </button>
    </form>
  );
}