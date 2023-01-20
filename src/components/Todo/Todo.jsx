import React from 'react';
import './Todo.styled.css';

function Todo({ todos, onDeleteTodo }) {
  return (
    <div>
      <ul className="TodoClass">
        {todos.map(item => (
          <li key={item.id} className="TodoList ">
            <p>{item.text}</p>
            <button type="button" onClick={() => onDeleteTodo(item.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
