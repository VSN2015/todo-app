import React, { useContext } from "react";
import "./CategoryList.css";
import { CATEGORY_ITEMS } from "../contants";
import { AppContext } from "../context/AppContext";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId } = useContext(AppContext);

  const handleCategoryItemClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

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
              <p>999</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
