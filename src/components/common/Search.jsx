import React from "react";

const Search = ({className}) => {
  return (
    <div className={`items-center self-stretch w-[400px] bg-zinc-100 flex gap-2 px-4 py-2.5 rounded-md ${className}`}>
      <img
        loading="lazy"
        src="icons/searchIcon.svg"
        className="aspect-square cursor-pointer object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
        alt="Search Icon"
      />
      <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
        <input


          type="text"
          id="searchInput"

          placeholder="Search features, tutorials, etc."
          aria-label="Search"
          role="search"

          className="bg-transparent w-full outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
