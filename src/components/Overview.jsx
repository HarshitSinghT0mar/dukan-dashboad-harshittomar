import * as React from "react";

function OverviewSection() {
  return (
    <div className="w-full">
       <div className="justify-between items-center flex gap-5 mt-8 mx-3 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 mb-[24px]">
      <p className="text-zinc-900 text-xl font-medium leading-7 my-auto">
        Overview
      </p>
      <div className="rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex items-center justify-between gap-2.5 px-3.5 py-2.5 border-solid">
        <div className="text-neutral-600 text-base leading-6 grow whitespace-nowrap my-auto">
          Last Month
        </div>
        <img
          loading="lazy"
          src="icons/arrow.svg"
          className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </div>
      <div className="flex gap-[20px]">
      <OverviewCard heading="Online Orders" number="231" />
      <OverviewCard heading="Online Orders" number="₹23,92,312.19" />
      </div>
    </div>
  );
}

function OverviewCard({ heading, number }) {
  return (
    <div className="shadow-sm bg-white flex grow flex-col w-full pl-5 pr-20 py-5 rounded-lg items-start max-md:max-w-full max-md:mt-5 max-md:pr-5">
      <div className="text-neutral-600 text-base leading-6 whitespace-nowrap">
        {heading}
      </div>
      <div className="text-zinc-900 text-3xl font-medium leading-10 mt-4">
        {number}
      </div>
    </div>
  );
}

export default OverviewSection;
