import React, { useContext, useState } from "react";
import "./SideBar.css";
import { CATEGORY_ITEMS } from "../contants";
import { AppContext } from "../context/AppContext";

const SideBar = () => {
  const {
    isShowSideBar,
    setIsShowSideBar,
    todoList,
    setTodoList,
    selectedTodoItem,
  } = useContext(AppContext);
  const [newTodoItem, setNewTodoItem] = useState({ ...selectedTodoItem });

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

  return (
    isShowSideBar && (
      <div className="sidebar">
        <div className="sidebar-content">
          <form action="">
            <div className="sidebar-content-input">
              <label htmlFor="sb-task-name">Task name</label>
              <input
                type="text"
                id="sb-task-name"
                value={newTodoItem.name}
                onChange={(e) =>
                  setNewTodoItem({ ...newTodoItem, name: e.target.value })
                }
              />
            </div>
            <div className="sidebar-content-input sidebar-content-input-checkbox">
              <label htmlFor="sb-is-important">Is important?</label>
              <input
                type="checkbox"
                id="sb-is-important"
                checked={newTodoItem.isImportant}
                onChange={() =>
                  setNewTodoItem({
                    ...newTodoItem,
                    isImportant: !newTodoItem.isImportant,
                  })
                }
              />
            </div>
            <div className="sidebar-content-input sidebar-content-input-checkbox">
              <label htmlFor="sb-is-done">Is done?</label>
              <input
                type="checkbox"
                id="sb-is-done"
                checked={newTodoItem.isDone}
                onChange={() =>
                  setNewTodoItem({
                    ...newTodoItem,
                    isDone: !newTodoItem.isDone,
                  })
                }
              />
            </div>
            <div className="sidebar-content-input sidebar-content-input-selectbox">
              <label htmlFor="sb-category">Category</label>
              <select
                value={newTodoItem.category}
                onChange={(e) => {
                  setNewTodoItem({ ...newTodoItem, category: e.target.value });
                }}
              >
                {CATEGORY_ITEMS.map((categoryItem) => {
                  return (
                    <option value={categoryItem.id} key={categoryItem.id}>
                      {categoryItem.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </div>
        <div className="sidebar-footer">
          <button
            className="sidebar-footer-cancel"
            onClick={handleCloseSideBar}
          >
            Cancel
          </button>
          <button
            className="sidebar-footer-save"
            onClick={() => handleSaveTodoItem(newTodoItem)}
          >
            Save
          </button>
        </div>
      </div>
    )
  );
};

export default SideBar;
