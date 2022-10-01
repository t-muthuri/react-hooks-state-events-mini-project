import React from "react";

function CategoryFilter({ categories, onSelectCat, selectedCat }) { //props
  
  const categoryList = categories.map((category) => {
    const className = category === selectedCat ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCat(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}

      {/* <button>All{All}</button>
      <button>Code{Code}</button>
      <button>Food{Food}</button>
      <button>Money{Money}</button>
      <button>Misc{Misc}</button> */}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
