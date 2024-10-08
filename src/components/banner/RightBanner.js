import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center lgl:justify-end items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[580px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      </div>
  );
}

export default RightBanner