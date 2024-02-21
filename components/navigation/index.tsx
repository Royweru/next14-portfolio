import Link from 'next/link'
import React from 'react'

export const NavBar = () => {

    const navigation = [
    {
        label:"About",
        href:"#about"
    }, 
{
    label:"Work display",
    href:"#portfolio"
},
{
    label:"Get In Touch",
    href:"#contact"
}
]
  return (
    <div className=' w-full bg-slate-100 border-b-[2px] border-neutral-300 
    flex items-center justify-center py-3  rounded-xl'>
       <ul className=' flex gap-x-4 '>
       {navigation.map(nav=>(
         <li
          
          key={nav.label} 
         className=' p-2 rounded-md
          hover:bg-cyan-800 hover:text-white hover:cursor-pointer
         bg-transparent text-black text-medium font-semibold font-sans' 
          
         >
            <Link href={nav.href}>
               {nav.label}
            </Link>
         </li> 
       ))}
       </ul>
    </div>
  )
}
