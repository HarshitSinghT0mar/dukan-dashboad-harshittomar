import React from 'react'




function NavItem({navText, navIcon,className}) {


  return (
    <div className={`items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5 hover:bg-[#343C53] cursor-pointer ${className}`}>
      <img
        loading="lazy"
        src={navIcon}
        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
        alt="Plugin Icon"
      />
      <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap opacity-80">
      {navText}
      </div>
    </div>
  );
}

export default NavItem
