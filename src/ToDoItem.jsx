import React, { useState } from 'react';

function ToDoItem({ todo, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    editTask(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between mt-4 border-b pb-2">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border px-2 py-1 mr-2"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => toggleComplete(todo.id)}
              className="text-green-600 hover:text-green-800"
            >
              ✔
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="text-yellow-500 hover:text-yellow-700"
            >
              ✏
            </button>
            <button
              onClick={() => deleteTask(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              🗑
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
