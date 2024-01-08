import * as React from "react";
import Search from "../common/Search";

function TransactionSectionHeader(props) {
  return (
    <div className="justify-between items-stretch self-stretch flex gap-5 max-md:flex-wrap">
     <Search  placeholder='Search by Order Id' className='w-[248px] text-[14px] bg-white' />
      <div className="justify-end items-stretch self-center flex gap-3 my-auto">
        <span className="items-stretch rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex justify-between gap-1.5 px-3 py-1.5 border-solid">
          <div className="text-neutral-600 text-base leading-6">Sort</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ade94f6f2fb6ac3b586f3967f314e06dcf33ba19f83f9ba07a0b35aa41cb0108?apiKey=bfeadb3c406b43669a4702900b0e2d26&"
            className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/292f7ba24753d98c8b1dfb784cfd238342ba9e34a3c5df64d81152c052e02429?apiKey=bfeadb3c406b43669a4702900b0e2d26&"
          className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
        />
      </div>
    </div>
  );
}


export default TransactionSectionHeader