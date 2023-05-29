import React from "react";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5 cursor-pointer ${isActive ? "text-pink-300" : "text-pink-100"}`}>
      {category}
      </div>
    </div>
  );
};

export default FilterProduct;
