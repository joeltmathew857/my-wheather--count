import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faCartShopping,
  faTimes,
  faTruck,
  faHeart,
  faWallet,
  faQuestion,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setnav(!nav)} className="cursor-pointer">
          <FontAwesomeIcon icon={faBars} className=" sm:h-4 lg:h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="sm:text-sm lg:text-lg lg:flex hidden bg-gray-200 rounded-full ">
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

      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* side drawer menu */}
      <nav></nav>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <FontAwesomeIcon
          onClick={() => setnav(!nav)}
          icon={faTimes}
          className="absolute right-4 top-4 cursor-pointer "
          size={30}
        />
        <h2
          className="text-2xl p-4 cursor-pointer "
          onClick={() => setnav(!nav)}
        >
          Best <span className="font-bold ">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-8">
            <li className="text-xl py-4 cursor-pointer">
              <FontAwesomeIcon icon={faTruck} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 cursor-pointer">
              <FontAwesomeIcon icon={faHeart} className="mr-4" />{" "}
              {/* Use faHeart directly */}
              Favorite
            </li>
            <li className="text-xl py-4 cursor-pointer">
              <FontAwesomeIcon icon={faWallet} className="mr-4" />
              Wallets
            </li>
            <li className="text-xl py-4 cursor-pointer">
              <FontAwesomeIcon icon={faQuestion} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 cursor-pointer">
              <FontAwesomeIcon icon={faDownload} className="mr-4 " />
              Best One
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
