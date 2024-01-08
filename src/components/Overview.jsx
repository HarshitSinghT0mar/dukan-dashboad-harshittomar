import * as React from "react";

function Overview({heading, number}) {
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


export default Overview