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
    <div className='w-[224px] bg-[#1E2640] text-white py-[16px] px-[10px]'>
      <NavHeader />
      <div className='flex flex-col gap-[4px]'>
       { navData.map((data,index)=>{
        const {icon,heading}=data
        return <NavItem key={index} navIcon={icon} navText={heading} />
       })}
      </div>
    </div>
  )
}

export default Navbar
