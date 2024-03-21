"use client"
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import { useModal } from '@/hooks/use-modal'
import { portfolio } from '../portfolio/showcase'
import Image from 'next/image'
import { ScrollArea,ScrollBar } from '../ui/scroll-area'

export const PortfolioModal = () => {
  const {isOpen,onClose,data} = useModal()
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
        <DialogContent className= ' w-full bg-zinc-800'>
           <DialogHeader>
            <DialogTitle>
                <h2 className=' text-2xl font-sans font-semibold text-black'>
                   {data?.name}
                </h2>
            </DialogTitle>
            <DialogDescription className=' font-semibold  text-sm font-san text-zinc-200 italic'>
                {data?.description}
            </DialogDescription>
           </DialogHeader>
           <ScrollArea className=' w-full]'>
           <div className=' w-full  flex gap-3 relative'>
              {data?.images?.map(image=>(
                <div key={image} className=' w-[500px] h-[350px] relative rounded-xl'>
                  <Image 
                    fill
                    src={image}
                    className=' bg-cover bg-center'
                    alt='porfolio image'
                    />
                </div>
              ))}
           </div>
           <ScrollBar orientation="horizontal" />
           </ScrollArea>
          
        </DialogContent>
    </Dialog>
  )
}
