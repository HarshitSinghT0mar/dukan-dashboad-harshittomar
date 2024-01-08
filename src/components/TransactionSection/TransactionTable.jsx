import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TransactionTable() {
  return (
    <table className="w-full">
  <TableHeader />

  {[...new Array(19)].map((_,index)=>{
    return <TableRow key={index} />
  })}
      <TableRow />
    </table>
  );

}




export default TransactionTable;
