import Image from 'next/image'
import React from 'react'

export const Avatar = () => {
  return (
    <div className=' py-10'>
        <div className=' relative w-[400px] h-[400px] '>
           <Image
            fill
            src="/images/profile.jpg"
            alt=''
            className=' rounded-full bg-cover bg-center'
            />
        </div>
    </div>
  )
}
