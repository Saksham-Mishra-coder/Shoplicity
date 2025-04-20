import React from "react";
import banner from "../../assets/banner.jpg";

function HeroSection() {
  return (
    <div className="relative w-full">
      
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
      />

      <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center">
        <div className="text-center text-white px-4 mt-[7rem]">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Discover Your Next Adventure!
          </h1>
          <p className="text-sm sm:text-lg md:text-xl font-medium">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
