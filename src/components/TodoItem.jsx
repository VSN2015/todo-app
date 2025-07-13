import React from "react";
import { useAppContext } from "../hooks/UseAppContext";

const TodoItem = (props) => {
  const { setSelectedTodoItemId, setIsShowSideBar, todoList, setTodoList } =
    useAppContext();

  const handleTodoItemClick = (todoItemId) => {
    setSelectedTodoItemId(todoItemId);
    setIsShowSideBar(true);
  };

  const handleTodoItemCheckboxChange = (todoItemId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoItemId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-item" onClick={() => handleTodoItemClick(props.id)}>
      <div style={{ display: "flex", gap: 4 }}>
        <input
          type="checkbox"
          checked={props.isDone}
          onClick={(e) => e.stopPropagation()}
          onChange={() => handleTodoItemCheckboxChange(props.id)}
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
