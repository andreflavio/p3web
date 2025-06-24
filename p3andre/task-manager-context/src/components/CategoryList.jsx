/*import React from 'react';
import { useTasks } from '../context/TaskContext';

export default function CategoryList() {
  const { categories } = useTasks();

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Categorias:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {categories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}
*/

import React from 'react';
import { useTasks } from '../context/TaskContext';

export default function CategoryList() {
  const { categories } = useTasks();

  return (
    <div style={{
      marginBottom: '30px',
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '8px',
    }}>
      <h3 style={{
        color: '#2c3e50',
        marginBottom: '15px',
        fontSize: '1.2rem',
        fontWeight: '600',
      }}>
        Categorias
      </h3>
      <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
        {categories.map((cat, idx) => (
          <li key={idx} style={{
            padding: '5px 0',
            color: '#34495e',
            fontSize: '1rem',
          }}>
            <span style={{ marginRight: '10px' }}>•</span> {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}