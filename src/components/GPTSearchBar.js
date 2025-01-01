import React from "react";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
import { lang } from "../utils/languageContants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMAGE} alt="netflix-bg-img" />
      </div>
      <div className="pt-[10%] px-4 w-[50%] mx-auto">
        <div className="bg-black p-4 grid grid-cols-12">
          <input
            className="py-2 px-4 col-span-9 mr-2"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="text-white bg-red-700 py-2 px-4 col-span-3 ">
            {lang[langKey].search}
          </button>
        </div>
      </div>
    </>
  );
};

export default GPTSearchBar;
