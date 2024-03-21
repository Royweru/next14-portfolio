"use client"
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { useModal } from '@/hooks/use-modal'

export const PortfolioModal = () => {
  const {isOpen} = useModal()
  return (
    <Dialog open={isOpen} >
        <DialogContent className=' bg-slate-200 '>
           <DialogHeader>
            <DialogTitle>
                <h2 className=' text-2xl font-sans font-semibold'>
                   Porfolio Details
                </h2>
            </DialogTitle>
           </DialogHeader>
           <h1>
            BODY DETAILS
           </h1>
        </DialogContent>
    </Dialog>
  )
}
