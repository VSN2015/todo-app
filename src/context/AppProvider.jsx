import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "di choi",
      isImportant: false,
      isDone: false,
      isDeleted: false,
      category: "other",
    },
    {
      id: 2,
      name: "di ngu",
      isImportant: false,
      isDone: false,
      isDeleted: false,
      category: "other",
    },
    {
      id: 3,
      name: "di hoc",
      isImportant: true,
      isDone: false,
      isDeleted: false,
      category: "other",
    },
    {
      id: 4,
      name: "di lam",
      isImportant: false,
      isDone: true,
      isDeleted: false,
      category: "other",
    },
  ]);
  const [selectedTodoItemId, setSelectedTodoItemId] = useState(null);
  const selectedTodoItem = todoList.find(
    (todo) => todo.id === selectedTodoItemId
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  return (
    <AppContext.Provider
      value={{
        selectedTodoItemId,
        setSelectedTodoItemId,
        selectedTodoItem,
        selectedCategoryId,
        setSelectedCategoryId,
        selectedFilterId,
        setSelectedFilterId,
        searchText,
        setSearchText,
        todoList,
        setTodoList,
        isShowSideBar,
        setIsShowSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
