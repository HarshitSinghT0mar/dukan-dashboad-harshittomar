import * as React from "react";
import Search from "./common/Search";

function Header(props) {
  return (
    <form className="items-stretch bg-white flex w-full justify-between gap-5 px-8 py-3 border-b-zinc-300 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <header className="flex items-center justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex gap-4 my-auto">
          <div className="text-zinc-900 text-base leading-6">Payments</div>
          <div className="self-center flex gap-1.5 my-auto items-start">
            <img
              loading="lazy"
              src="icons/Help.svg"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
              alt="Payment Image"
            />
            <div className="text-neutral-600 text-xs leading-4">How it works</div>
          </div>
        </div>
     <Search />
      </header>
      <div className="items-stretch flex justify-between gap-3">
        <img
          loading="lazy"
          src="icons/message.svg"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          alt="message-icon"
        />
        <img
          loading="lazy"
          src="icons/dropdownArrow.svg"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        
        />
      </div>
    </form>
  );
}


export default Header