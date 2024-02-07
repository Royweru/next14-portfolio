import { Facebook, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'

export const Contact = () => {
  return (
    <div className=' col-span-3 rounded-md p-2 flex justify-center gap-x-2 items-center' id='contact'>
      <BsWhatsapp />
      <BsTwitter/>
      <BsFacebook />
      <LinkedinIcon />
    </div>
  )
}
