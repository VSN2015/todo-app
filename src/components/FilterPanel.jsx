import React from "react";
import "./FilterPanel.css";
import FilterList from "./FilterList";
import CategoryList from "./CategoryList";
import { useAppContext } from "../hooks/UseAppContext";

const FilterPanel = () => {
  const { searchText, setSearchText } = useAppContext();

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
      <FilterList />
      <CategoryList />
    </div>
  );
};

export default FilterPanel;
