import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay*/}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1>
            The <span>Best</span>
          </h1>
          <h1>
            Foods <span>Delivered</span>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1269665/pexels-photo-1269665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Burgerimage"
          className="w-full h-96" // Adjust the width and height here
        />
      </div>
    </div>
  );
};

export default Hero;
