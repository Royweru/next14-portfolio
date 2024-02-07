import React from 'react'

export const NavBar = () => {

    const navigation = [{label:"About"}, {label:"Work display"},{label:"Get In Touch"}]
  return (
    <div className=' w-full bg-slate-100 border-b-[2px] border-neutral-300 flex items-center justify-center py-3 m-2 rounded-xl'>
       <ul className=' flex gap-x-4 '>
       {navigation.map(nav=>(
         <li key={nav.label} className=' p-2 rounded-md bg-cyan-200 text-medium font-semibold font-sans'>
            {nav.label}
         </li>
       ))}
       </ul>
    </div>
  )
}
