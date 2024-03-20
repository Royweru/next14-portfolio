import {  LinkedinIcon } from 'lucide-react'
import React from 'react'
import {  BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

export const Contact = () => {
  return (
    <div className=' col-span-2 rounded-md p-2 flex justify-center gap-x-4 items-center' id='contact'>
      <a href="https://github.com/Royweru" target='_blank'>
      <BsGithub className=' w-10 h-10'/>
      </a>
      
      <a href="https://twitter.com/roy_weru" target='_blank'>
      <BsTwitter className=' w-10 h-10'/>
      </a>
      <a href="https://www.instagram.com/codewer0/">
      <BsInstagram className=' w-10 h-10' />
      </a>
      <a href="https://www.linkedin.com/in/roy-matheri-59b8a5245/" target='_blank'>
      <LinkedinIcon className=' w-10 h-10' />
      </a>
    
    </div>
  )
}
