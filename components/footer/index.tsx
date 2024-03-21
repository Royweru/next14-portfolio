import React from 'react'
import { Contact } from './contact'
import { ContactForm } from './contact-form'
export const Footer = () => {
    
  return (
   <footer className='  w-full py-4 px-4 m-1 rounded-md'>
     <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-4'>
       <ContactForm />
       <Contact />
     </div>
     <div className=' border-t-2 border-white flex items-center justify-center'>
          <div className=' text-xs font-semibold font-sans  text-white'>
            <small>
            &copy; Copyright 2024, Roy Waweru portfolio
            </small>
          </div>
     </div>
   </footer>
  )
}
