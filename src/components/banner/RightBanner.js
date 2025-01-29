import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center lgl:justify-end items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[580px] lgl:h-[580px] z-10 rounded-full mx-auto lgl:translate-x-24"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
