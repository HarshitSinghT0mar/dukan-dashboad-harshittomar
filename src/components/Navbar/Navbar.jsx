import React from 'react'
import NavHeader from './NavHeader'
import NavItem from './NavItem'

let navData=[
    {icon: 'icons/Navbar-HomeIcon.svg', heading:'Home'},
    {icon: 'icons/Navbar-OrdersIcon.svg', heading:'Orders'},
    {icon: 'icons/Navbar-ProductsIcon.svg', heading:'Products'},
    {icon: 'icons/Navbar-DeliveryIcon.svg', heading:'Delivery'},
    {icon: 'icons/Navbar-MarketingIcon.svg', heading:'Marketing'},
    {icon: 'icons/Navbar-PaymentsIcon.svg', heading:'Payments'},
    {icon: 'icons/Navbar-ToolsIcon.svg', heading:'Tools'},
    {icon: 'icons/Navbar-DiscountIcon.svg', heading:'Discounts'},
    {icon: 'icons/Navbar-AudienceIcon.svg', heading:'Audience'},
    {icon: 'icons/Navbar-AppearanceIcon.svg', heading:'Appearance'},
    {icon: 'icons/Navbar-PluginIcon.svg', heading:'Plugins'},
]

function Navbar() {
  return (
    <section className='w-[224px]   bg-[#1E2640] text-white py-[16px] px-[10px]'>
      <NavHeader />
      <nav className='flex flex-col gap-[4px] min-h-[1314px]'>
       { navData.map((data,index)=>{
        const {icon,heading}=data
        return <NavItem key={index} navIcon={icon} navText={heading} className={` ${index===5 && ''}`}  />
       })}
      </nav>
      <div className="items-stretch rounded  bg-slate-700 flex max-w-[192px] flex-col justify-center pl-3 pr-8 py-1.5">
      <div className="items-center flex justify-between gap-3">
        <div className="items-center rounded bg-white bg-opacity-10 flex aspect-square flex-col justify-center w-9 h-9 my-auto px-1.5">
          <img
            loading="lazy"
            src='icons/walletIcon.svg'
            className="aspect-square object-contain object-center w-full overflow-hidden"
          />
        </div>
        <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="text-white text-sm leading-4 whitespace-nowrap">
            Available credits
          </div>
          <div className="text-white text-base font-medium leading-6">
            222.10
          </div>
        </span>
      </div>
    </div>
    </section>
  )
}

export default Navbar
