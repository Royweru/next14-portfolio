import React from 'react'
import { Contact } from './contact'
import { ContactForm } from './contact-form'
export const Footer = () => {
  return (
   <footer className=' w-full grid grid-cols-5'>
      <ContactForm />
      <Contact />
   </footer>
  )
}
