/*import React from 'react';
import { useTasks } from '../context/TaskContext';

export default function TaskList() {
  const { tasks, categories, toggleTask } = useTasks();

  return (
    <div>
      <h3>Tarefas:</h3>
      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: '15px' }}>
          <strong>{cat}</strong>
          <ul style={{ paddingLeft: '20px' }}>
            {tasks.filter(t => t.category === cat).map(task => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'gray' : 'black',
                    marginLeft: '5px'
                  }}>
                    {task.description}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
*/

import React from 'react';
import { useTasks } from '../context/TaskContext';

export default function TaskList() {
  const { tasks, categories, toggleTask } = useTasks();

  return (
    <div>
      <h3 style={{
        color: '#2c3e50',
        marginBottom: '15px',
        fontSize: '1.2rem',
        fontWeight: '600',
      }}>
        Tarefas por Categoria
      </h3>
      {categories.map((cat) => (
        <div key={cat} style={{
          marginBottom: '20px',
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '8px',
        }}>
          <strong style={{ color: '#2980b9', fontSize: '1.1rem' }}>{cat}</strong>
          <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
            {tasks.filter(t => t.category === cat).map(task => (
              <li key={task.id} style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    style={{
                      marginRight: '10px',
                      width: '16px',
                      height: '16px',
                      cursor: 'pointer',
                    }}
                  />
                  <span style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#7f8c8d' : '#34495e',
                    fontSize: '1rem',
                  }}>
                    {task.description}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}