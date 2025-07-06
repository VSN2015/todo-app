import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <form action="">
          <div className="sidebar-content-input">
            <label htmlFor="sb-task-name">Task name</label>
            <input type="text" id="sb-task-name" />
          </div>
          <div className="sidebar-content-input sidebar-content-input-checkbox">
            <label htmlFor="sb-is-important">Is important?</label>
            <input type="checkbox" id="sb-is-important" />
          </div>
          <div className="sidebar-content-input sidebar-content-input-checkbox">
            <label htmlFor="sb-is-done">Is done?</label>
            <input type="checkbox" id="sb-is-done" />
          </div>
        </form>
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-footer-cancel">Cancel</button>
        <button className="sidebar-footer-save">Save</button>
      </div>
    </div>
  );
};

export default SideBar;
