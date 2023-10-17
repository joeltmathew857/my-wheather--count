import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="">
      {/*left side*/}
      <FontAwesomeIcon
        icon={faBars}
        className="cursor-pointer sm:h-12 lg:h-12"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl ">
        Best <span className="font-bold">Eats</span>
      </h1>
    </div>
  );
};

export default SideBar;
