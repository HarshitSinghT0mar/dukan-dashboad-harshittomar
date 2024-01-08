import React from "react";

// props to render data dynamically

function TableRow({
  orderNumber = "#281209 ",               
  orderDate = "7 July, 2023",
  orderAmount = "₹1,278.23",
  transactionFee = "₹22",
}) {
  return (
    <tr className={`h-12 box-border  text-sm font-medium text-[#1A181E]`}>
      <td className={`pl-3 pr-2 border-b-[#e6e6e6] border-b border-solid`}>
        <p
          className={` text-sm font-medium text-[#146EB4] whitespace-pre-wrap m-0 p-0`}
        >
          {orderNumber}            
        </p>
      </td>
      <td className={`px-2 border-b-[#e6e6e6] border-b border-solid`}>
        <p className={` text-sm font-normal  whitespace-pre-wrap m-0 p-0`}>
          {orderDate}
        </p>
      </td>
      <td className={`px-2 border-b-[#e6e6e6] border-b border-solid`}>
        <p className={` text-sm font-normal text-end whitespace-pre-wrap m-0 p-0`}>
          {orderAmount}
        </p>
      </td>
      <td className={`pl-2 pr-3 border-b-[#e6e6e6] border-b border-solid`}>
        <p className={` text-sm font-normal text-end  whitespace-pre-wrap m-0 p-0`}>
          {transactionFee}
        </p>
      </td>
    </tr>
  );
}
export default TableRow;
