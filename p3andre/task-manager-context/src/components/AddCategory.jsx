/*import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddCategory() {
  const [name, setName] = useState('');
  const { addCategory } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(name.trim());
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Nova categoria"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ flex: 1, padding: '5px' }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
*/

import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddCategory() {
  const [name, setName] = useState('');
  const { addCategory } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(name.trim());
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      alignItems: 'center',
    }}>
      <input
        type="text"
        placeholder="Nova categoria"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          flex: '1',
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