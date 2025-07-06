import React, { useState } from "react";
import "./SideBar.css";

const SideBar = (props) => {
  const { todoItem } = props;
  const [newTodoItem, setNewTodoItem] = useState({ ...todoItem });

  const handleSaveTodoItem = () => {
    props.handleSaveTodoItem(newTodoItem);
  };

  return (
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
              onChange={(e) =>
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
              onChange={(e) =>
                setNewTodoItem({ ...newTodoItem, isDone: !newTodoItem.isDone })
              }
            />
          </div>
        </form>
      </div>
      <div className="sidebar-footer">
        <button
          className="sidebar-footer-cancel"
          onClick={props.handleCloseSideBar}
        >
          Cancel
        </button>
        <button className="sidebar-footer-save" onClick={handleSaveTodoItem}>
          Save
        </button>
      </div>
    </div>
  );
};

export default SideBar;
