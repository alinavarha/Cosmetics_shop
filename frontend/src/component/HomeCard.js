import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, brend, loading,id }) => {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} >
        <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full" />
            </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500  font-medium">{category}</p>
          <p className="text-center font-bold">
          <span className="text-pink-300">₴  </span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
