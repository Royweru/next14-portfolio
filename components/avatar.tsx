import Image from 'next/image'
import React from 'react'

export const Avatar = () => {
  return (
    <div className=' py-10 bg-white'>
        <div className=' relative w-[400px] h-[400px] bg-white'>
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
