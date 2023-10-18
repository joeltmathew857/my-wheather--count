import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/*left side*/}
      <div className="flex">
        <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer sm:h-4 lg:h-8"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl ">
          Best <span className="font-bold">Eats</span>
        </h1>

        <div className="sm:text-sm  lg:text-lg lg:flex hidden bg-gray-200 rounded-full ">
          <p className="bg-black  rounded-full text-white">delivery</p>
          <p>pickup</p>
        </div>
      </div>
      {/*search input*/}
      <div className="flex rounded-full w-[200px] items-center px-2">
        <FontAwesomeIcon
          icon={faSearch}
          className="sm:h-10  lg:h-6 cursor-pointer"
        />
        <input
          type="text"
          placeholder="search foods"
          className=" bg-gray-600 px-6 h-10 rounded-full bg-transparent"
        />
      </div>
    </div>
  );
};

export default SideBar;
