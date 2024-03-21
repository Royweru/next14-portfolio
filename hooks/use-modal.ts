import { create } from "zustand";

type PortfolioData={
    id?:number,
    name?:string,
    description?:string,
    images?:string[]
}
interface useModalStore{
    isOpen:boolean,
    onOpen:(data?:PortfolioData)=>void,
    onClose:()=>void,
    data?:PortfolioData
}

export const useModal = create<useModalStore>((set)=>({
    isOpen:false,
    data:{},
    onOpen:(data={})=>set({isOpen:true,data}),
    onClose:()=>set({isOpen:false}),
}))