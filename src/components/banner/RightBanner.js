import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center lgl:justify-end items-center relative">
      <svg width="0" height="0">
        <clipPath id="customShape" clipPathUnits="objectBoundingBox">
          <path d="M0.05,0.1 C0.2,-0.1, 0.8,-0.1, 0.95,0.1 C1,0.3, 1,0.7, 0.95,0.9 C0.8,1.1, 0.2,1.1, 0.05,0.9 C0,0.7, 0,0.3, 0.05,0.1 Z" />
        </clipPath>
      </svg>
      
      <img
        className="w-[300px] h-[300px] lgl:w-[580px] lgl:h-[580px] z-10 mx-auto lgl:translate-x-24 object-cover"
        src={bannerImg}
        alt="bannerImg"
        style={{
          clipPath: "url(#customShape)",
          objectPosition: "top",
        }}
      />
    </div>
  );
  
};

export default RightBanner;
