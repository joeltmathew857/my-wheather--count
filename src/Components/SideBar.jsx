import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex">
        <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer sm:h-4 lg:h-8"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="sm:text-sm  lg:text-lg lg:flex hidden bg-gray-200 rounded-full ">
          <p className="bg-black p-2 rounded-full text-white">delivery</p>
          <p className="p-2">pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="flex bg-gray-200 rounded-full w-[200px]sm:w-[400px] lg:w-[500px] items-center px-2">
        <FontAwesomeIcon
          icon={faSearch}
          className="sm:h-10 lg:h-6 cursor-pointer"
        />
        <input
          type="text"
          placeholder="search foods"
          className=" px-6 h-12  rounded-full bg-transparent text-white w-full "
        />
        {/* cart */}
        <div className="md:flex bg-black rounded-xl py-2">
          <button className="text-white">Cart</button>
          <div>
            <FontAwesomeIcon icon={faCartShopping} className="text-white" />
          </div>
        </div>
      </div>

      {/*mobile menu*/}
      {/*overlay*/}
      <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      {/*side drawer menu*/}
      <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
        <FontAwesomeIcon icon="fa-solid fa-x" />
      </div>
    </div>
  );
};

export default SideBar;
