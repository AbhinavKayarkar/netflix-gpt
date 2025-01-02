import React, { useRef } from "react";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
import { lang } from "../utils/languageContants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const gptSearch = useRef();

  async function handleGPTSearch() {
    // OPENAI integration in our project

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptSearch.current.value }],
    });

    console.log(completion?.choices[0]?.message);
  }
  return (
    <>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMAGE} alt="netflix-bg-img" />
      </div>
      <div className="pt-[10%] px-4 w-[50%] mx-auto">
        <form
          className="bg-black p-4 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={gptSearch}
            className="py-2 px-4 col-span-9 mr-2"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="text-white bg-red-700 py-2 px-4 col-span-3"
            onClick={handleGPTSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GPTSearchBar;
