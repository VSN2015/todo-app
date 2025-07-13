import React, { useContext } from "react";
import "./FilterPanel.css";
import FilterList from "./FilterList";
import CategoryList from "./CategoryList";
import { AppContext } from "../context/AppContext";

const FilterPanel = () => {
  const { searchText, setSearchText } = useContext(AppContext);

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
