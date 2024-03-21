"use client"
import React, { useEffect, useState } from 'react'
import { PortfolioModal } from '../modals/portfolio-modal'

const ModalProvider = () => {
  const[isMounted,setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
  return (
        <>
         <PortfolioModal />
        </>
  )
}

export default ModalProvider