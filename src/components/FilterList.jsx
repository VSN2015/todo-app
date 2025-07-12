import React, { useMemo } from "react";

const FilterList = ({
  filterItems,
  selectedFilterId,
  todoList,
  handleFilterItemClick,
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

  return (
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
            <p className="filter-count">{countTodoByFilterId[filterItem.id]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterList;
