import React, { useMemo } from "react";
import "./FilterPanel.css";

const filterItems = [
  {
    id: "all",
    name: "All",
    iconPath: "./public/inbox.png",
  },
  {
    id: "important",
    name: "Important",
    iconPath: "./public/flag.png",
  },
  {
    id: "completed",
    name: "Completed",
    iconPath: "./public/check.png",
  },
  {
    id: "deleted",
    name: "Deleted",
    iconPath: "./public/delete.png",
  },
];

const FilterPanel = ({
  selectedFilterId,
  setSelectedFilterId,
  todoList,
  searchText,
  setSearchText,
}) => {
  const countTodoByFilterId = useMemo(() => {
    return todoList.reduce(
      (acc, todo) => {
        acc.all++;
        if (todo.isImportant) {
          acc.important++;
        }
        if (todo.isDone) {
          acc.completed++;
        }
        if (todo.isDeleted) {
          acc.deleted++;
        }
        return acc;
      },
      { all: 0, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  const handleFilterItemClick = (filterItemId) => {
    setSelectedFilterId(filterItemId);
  };

  return (
    <div className="filter-panel">
      <input
        type="text"
        name="search-text"
        id="fp-search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="filter-container">
        {filterItems.map((filterItem) => {
          return (
            <div
              key={filterItem.id}
              className={`filter-item ${
                selectedFilterId === filterItem.id ? "selected" : ""
              }`}
              onClick={() => handleFilterItemClick(filterItem.id)}
            >
              <div className="filter-name">
                <img src={filterItem.iconPath} alt={filterItem.name} />
                <p>{filterItem.name}</p>
              </div>
              <p className="filter-count">
                {countTodoByFilterId[filterItem.id]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterPanel;
