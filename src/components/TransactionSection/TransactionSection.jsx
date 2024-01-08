import React from 'react'
import TransactionSectionHeader from './TransactionSectionHeader'
import TransactionTable from './TransactionTable'

function TransactionSection() {
  return (
    <div className='mt-[32px]'>
     <p className="text-[#1A181E] text-xl font-medium leading-7  mx-3 max-md:max-w-full max-md:mr-2.5 mb-[20px]">
      Transactions | This Month
    </p>
    <div className='flex flex-col gap-[12px] px-[12px] pt-[12px] bg-white'>
      <TransactionSectionHeader />
      <TransactionTable />
    </div>
    </div>
  )
}

export default TransactionSection
