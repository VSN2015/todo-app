import React, { useMemo } from "react";
import { FILTER_ITEMS } from "../contants";
import { useAppContext } from "../hooks/UseAppContext";

const FilterList = () => {
  const { todoList, selectedFilterId, setSelectedFilterId } = useAppContext();

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
    <div className="filter-container">
      {FILTER_ITEMS.map((filterItem) => {
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
