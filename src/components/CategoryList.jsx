import React, { useMemo } from "react";
import "./CategoryList.css";
import { CATEGORY_ITEMS } from "../contants";
import { useAppContext } from "../hooks/UseAppContext";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId, todoList } =
    useAppContext();

  const handleCategoryItemClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const countTodoItemsByCategory = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        return {
          ...acc,
          [cur.category]: acc[cur.category] + 1,
        };
      },
      {
        personal: 0,
        work: 0,
        travel: 0,
        other: 0,
      }
    );
  }, [todoList]);

  return (
    <div className="category-list">
      <div className="category-list-title">
        <b>Category</b>
      </div>
      {CATEGORY_ITEMS.map((categoryItem) => {
        return (
          <div
            className={`category-item ${
              selectedCategoryId === categoryItem.id ? "selected" : ""
            }`}
            key={categoryItem.id}
            onClick={() => handleCategoryItemClick(categoryItem.id)}
          >
            <div className="category-item-name">
              <p>{categoryItem.name}</p>
            </div>
            <div className="category-item-count">
              <p>{countTodoItemsByCategory[categoryItem.id]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
