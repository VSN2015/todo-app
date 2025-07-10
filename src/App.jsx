import { useMemo, useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import SideBar from "./components/SideBar";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "di choi",
      isImportant: false,
      isDone: false,
    },
    {
      id: 2,
      name: "di ngu",
      isImportant: false,
      isDone: false,
    },
    {
      id: 3,
      name: "di hoc",
      isImportant: true,
      isDone: false,
    },
    {
      id: 4,
      name: "di lam",
      isImportant: false,
      isDone: true,
    },
  ]);
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const taskInputRef = useRef();
  const [selectedTodoItemId, setSelectedTodoItemId] = useState(null);
  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [searchText, setSearchText] = useState("");

  const selectedTodoItem = todoList.find(
    (todo) => todo.id === selectedTodoItemId
  );

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

  const handleTodoItemClick = (todoItemId) => {
    setSelectedTodoItemId(todoItemId);
    setIsShowSideBar(true);
  };

  const handleCloseSideBar = () => {
    setIsShowSideBar(false);
  };

  const handleSaveTodoItem = (todoItem) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoItem.id) {
        return todoItem;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (!todo.name.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }

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
  }, [selectedFilterId, todoList, searchText]);

  const todos = filteredTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        isImportant={todo.isImportant}
        isDone={todo.isDone}
        handleTodoItemCheckboxChange={handleTodoItemCheckboxChange}
        handleTodoItemClick={handleTodoItemClick}
      />
    );
  });

  return (
    <div className="container">
      <FilterPanel
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
        todoList={todoList}
        searchText={searchText}
        setSearchText={setSearchText}
      />
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
        {isShowSideBar && (
          <SideBar
            key={selectedTodoItemId}
            handleCloseSideBar={handleCloseSideBar}
            todoItem={selectedTodoItem}
            handleSaveTodoItem={handleSaveTodoItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;
