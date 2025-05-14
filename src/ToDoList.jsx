import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTask, toggleComplete, editTask }) {
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
