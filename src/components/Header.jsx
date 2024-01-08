import * as React from "react";
import Search from "./common/Search";

function Header(props) {
  return (
    <div className="items-stretch bg-white flex w-full justify-between gap-5 px-8 py-3 border-b-[#D9D9D9]border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
     
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
     <Search placeholder="Search features, tutorials, etc." />
    
      <div className="items-stretch flex justify-between gap-3">
      {/* <img                         
      src="icons/message.svg"                                  //icon provided is larger in size
      loading="lazy"
      className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
    /> */}   
     
        <img
          loading="lazy"
          src="icons/dropdownArrow.svg"
          className="aspect-square object-contain cursor-pointer object-center w-10 overflow-hidden shrink-0 max-w-full"
        
        />
      </div>
    </div>
  );
}


export default Header