import React from 'react'

export const ContactForm = () => {
  return (
    <div className=' col-span-2 flex flex-col gap-y-2'>
         <textarea 
         className=' w-full p-4 font-sans font-semibold text-neutral-700 focus:outline-double rounded-xl '
         placeholder='Tell me something...'
          />
        <button className='  rounded p-4 bg-cyan-200 text-emerald-900 font-semibold hover:opacity-75 hover:cursor-pointer'>
             SUBMIT
            </button>      
    </div>
  )
}
