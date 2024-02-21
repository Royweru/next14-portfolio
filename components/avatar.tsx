import Image from 'next/image'
import React from 'react'

export const Avatar = () => {
  return (
    <div className=' py-10 col-span-1 bg-transparent'>
        <div className=' relative w-[400px] h-[400px]'>
           <Image
            fill
            src="/images/profile.jpg"
            alt=''
            className='  border-transparent  rounded-2xl bg-cover bg-center'
            />
        </div>
    </div>
  )
}
