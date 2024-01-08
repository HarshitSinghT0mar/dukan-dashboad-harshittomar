function TableHeader(){
    return (
        <thead className="text-sm font-medium text-[rgba(77,77,77,1)]">
        <tr className={`bg-[#f2f2f2] h-10`}>
          <td className={`px-2`}>
            <p>Order ID</p>
          </td>
          <td className={`px-2`}>
            <div className={`flex justify-start items-center flex-row`}>
              <p>Order date</p>
              <img src="icons/dropdown.svg" className="w-2 h-2 flex ml-1" />
            </div>
          </td>
          <td className={`px-2`}>
            <p className="text-end">Order amount</p>
          </td>
          <td className={`pl-2 pr-3 `}>
            <div className={`flex justify-end items-center`}>
              <p>Transaction fees</p>
              <img className='w-3.5 h-3.5 flex ml-1' src="icons/Info.svg" />
            </div>
          </td>
        </tr>
      </thead>
    )

}
 export default TableHeader