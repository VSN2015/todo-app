import { useMemo, useRef } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import SideBar from "./components/SideBar";
import FilterPanel from "./components/FilterPanel";
import { useAppContext } from "./hooks/UseAppContext";

function App() {
  const taskInputRef = useRef();
  const {
    selectedTodoItemId,
    selectedCategoryId,
    selectedFilterId,
    searchText,
    todoList,
    setTodoList,
  } = useAppContext();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        id: crypto.randomUUID(),
        name: event.target.value,
        isImportant: false,
        isDone: false,
        isDeleted: false,
        category: "other",
      };
      setTodoList([newTodo, ...todoList]);
      // event.target.value = "";
      taskInputRef.current.value = "";
    }
  };

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (!todo.name.toLowerCase().includes(searchText.toLowerCase()))
        return false;

      if (selectedCategoryId && todo.category !== selectedCategoryId)
        return false;

      switch (selectedFilterId) {
        case "all":
          return true;
        case "important":
          return todo.isImportant;
        case "completed":
          return todo.isDone;
        case "deleted":
          return todo.isDeleted;
        default:
          return false;
      }
    });
  }, [selectedFilterId, todoList, searchText, selectedCategoryId]);

  const todos = filteredTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        isImportant={todo.isImportant}
        isDone={todo.isDone}
      />
    );
  });

  return (
    <div className="container">
      <FilterPanel />
      <div className="main-content">
        <input
          type="text"
          name="add-new-task"
          placeholder="Add new task"
          className="task-input"
          onKeyDown={handleKeyDown}
          ref={taskInputRef}
        />
        <div>{todos}</div>
        <SideBar key={selectedTodoItemId} />
      </div>
    </div>
  );
}

export default App;
