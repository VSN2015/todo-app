import React from "react";
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
      <FilterList
        filterItems={filterItems}
        selectedFilterId={selectedFilterId}
        todoList={todoList}
        handleFilterItemClick={handleFilterItemClick}
      />
    </div>
  );
};

export default FilterPanel;
