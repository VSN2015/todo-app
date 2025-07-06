import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <div style={{ display: "flex", gap: 4 }}>
        <input
          type="checkbox"
          checked={props.isDone}
          onChange={() => props.handleTodoItemCheckboxChange(props.id)}
        />
        <p style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
          {props.name}
        </p>
      </div>
      {props.isImportant && <span>⭐️</span>}
    </div>
  );
};

export default TodoItem;
