import * as React from "react";

function NavHeader(props) {
  return (
    <div className="flex gap-3 pr-4 items-start mb-[24px]">
      <div className="rounded bg-white flex aspect-square flex-col justify-center items-center w-10 h-10 px-px">
        <img
          loading="lazy"
          srcSet="icons/logo.png"
          className="aspect-square object-contain object-center w-full overflow-hidden"
        />
      </div>
      <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
        <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
          Nishyan
        </div>
        <a className="text-white text-sm leading-4 underline whitespace-nowrap cursor-pointer opacity-80 mt-1">
          Visit store
        </a>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5f608b6ce9730cea85c11c8d232d87963ed700103a61e54af2a14cec35feae?apiKey=bfeadb3c406b43669a4702900b0e2d26&"
        className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  );
}


export default NavHeader