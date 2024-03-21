"use client"
import { constants } from 'http2'
import React, { use, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const[error,setErr] = useState("")
  const[isSuccess,setIsSuccess] = useState("")

  const onSubmit =async ()=>{
    const templateParams={
      from_name:email,
      to_name:"Roy Matheri",
      message
    }
    try {
      setIsLoading(true)
      const emailDetails = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
     setIsSuccess(`Your messsage has been successfully submitted, thanks for the outreach ${name}, I really appreciate`)
     setName("")
     setEmail("")
     setMessage("")
    } catch (e:any) {
      setErr(e)
      console.error(e)
    }finally{
      setIsLoading(false)
    }
  }
  return (
 <div className=' w-full relative py-2 md:px-2 col-span-2 '>
  <div className=' w-full flex justify-between items-center py-4'>
  <input
     type='text'
     value={name}
     disabled={isLoading}
     onChange={(e)=>setName(e.target.value)}
     placeholder='your name'
     className=' w-2/4 mr-2 p-5 focus:ring-1  text-neutral-200 ring-black font-mono font-bold text-lg'
    />
     <input
     type='email'
     placeholder=' your email adress'
     value={email}
     disabled={isLoading}
     onChange={(e)=>setEmail(e.target.value)}
     className='w-2/4 p-5  focus:ring-1 text-neutral-200 ring-black font-mono font-bold text-lg'
    />
  </div>
   <div className='w-full flex justify-center'>
   <textarea 
    placeholder='What do you have to say..'
    value={message}
    disabled={isLoading}
    onChange={(e)=>setMessage(e.target.value)}
    className=' w-11/12 p-6  text-neutral-200 ring-black font-mono font-bold text-lg rounded-md border border-zinc-800'
   />
   </div>
   
   <div className='w-full flex items-center justify-center py-4'>
    <button className=' w-3/4 p-2 hover:bg-emerald-300 hover:text-black
      text-white font-bold text-xl hover:cursor-pointer 
      hover:opacity-85 rounded-lg flex justify-center items-center gap-x-4' 
      onClick={onSubmit}
      disabled={isLoading}
      >
        {isLoading&&(
          <Loader2 className=' w-5 h-5 font-bold animate-spin'/>
        )}
        SUBMIT
    </button>
   </div>
   {isSuccess&&(
    <div className=' w-full flex justify-center font-semibold p-4 bg-emerald-700 text-black tracking-wide'>
        🎉🎉🎉{isSuccess}
    </div>
   )}
 </div>
  )
}
