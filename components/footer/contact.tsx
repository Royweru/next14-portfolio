import { Facebook, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'

export const Contact = () => {
  return (
    <div className=' col-span-3 rounded-md p-2 flex justify-center gap-x-2 items-center' id='contact'>
      <BsWhatsapp className=' w-7 h-7'/>
      <BsTwitter className=' w-7 h-7'/>
      <BsFacebook className=' w-7 h-7' />
      <LinkedinIcon className=' w-7 h-7' />
    </div>
  )
}
