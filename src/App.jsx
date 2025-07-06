import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import SideBar from "./components/SideBar";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "di choi", isImportant: false, isDone: false },
    { id: 2, name: "di ngu", isImportant: false, isDone: false },
    { id: 3, name: "di hoc", isImportant: true, isDone: false },
    { id: 4, name: "di lam", isImportant: false, isDone: true },
  ]);
  const taskInputRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        id: crypto.randomUUID(),
        name: event.target.value,
        isImportant: false,
        isDone: false,
      };
      setTodoList([newTodo, ...todoList]);
      // event.target.value = "";
      taskInputRef.current.value = "";
    }
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

  const todos = todoList.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        isImportant={todo.isImportant}
        isDone={todo.isDone}
        handleTodoItemCheckboxChange={handleTodoItemCheckboxChange}
      />
    );
  });

  return (
    <div className="container">
      <input
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
        onKeyDown={handleKeyDown}
        ref={taskInputRef}
      />
      <div>{todos}</div>
      <SideBar />
    </div>
  );
}

export default App;
