import * as React from "react";



export function Pagination() {
    return (
      <div className={`flex justify-center self-center items-stretch flex-row min-w-[610px] h-8 box-border max-w-[610px]`}>
        <div
          className={`[border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] bg-white flex justify-start items-center flex-row grow-0 shrink-0 basis-auto px-1.5 rounded-tl rounded-tr rounded-br rounded-bl border-t border-r border-b border-l border-[rgba(217,217,217,1)]`}
        >
          <img src="icons/leftArrow.svg" className="w-[18px] h-[18px] text-[rgba(77,77,77,1)] flex grow-0 shrink-0 basis-auto" />
          <p className={` text-sm font-medium text-[rgba(77,77,77,1)] grow-0 shrink-0 basis-auto ml-1.5 m-0 p-0`}>Previous</p>
        </div>
        <PaginationComponent />
      </div>
    );
  }



function PaginationComponent() {
    return (
      <div className={`flex justify-start items-center flex-row gap-2 grow shrink-0 basis-auto ml-6 text-sm font-normal text-center text-[rgba(77,77,77,1)]  box-border m-0 p-0`}>

        <p className={` text-sm font-normal text-center  grow shrink-0 basis-7 box-border m-0 p-0`}>1</p>
        <p className={` text-[rgba(77,77,77,1)] grow shrink-0 basis-7 box-border m-0 p-0`}>...</p>
        
      {[10,11,12,13,14,15,16,17,18].map((pageNo, index)=>{
        return  <p className={` text-sm font-normal text-center ${pageNo===10 && 'bg-[#146EB4] text-white py-[6px] px-[8px] rounded-[4px]'} grow shrink-0 basis-7 box-border m-0 p-0 `}>{pageNo}</p>
      })}
       
       
        
        <div
          className={`[border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] bg-white flex justify-end items-center flex-row h-8 grow-0 shrink-0 basis-auto box-border ml-4 px-1.5 rounded-tl rounded-tr rounded-br rounded-bl border-t border-r border-b border-l border-[rgba(217,217,217,1)]`}
        >
          <p className={` text-sm font-medium text-[rgba(77,77,77,1)] grow-0 shrink-0 basis-auto mr-1.5 m-0 p-0`}>Next</p>
          <img src="icons/rightArrow.svg" className="w-[18px]  h-[18px] text-[rgba(77,77,77,1)] flex grow-0 shrink-0 basis-auto" />
        </div>
      </div>
    )
  }

export default Pagination