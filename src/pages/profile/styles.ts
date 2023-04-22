import { cva } from 'class-variance-authority'

export const homeContainer = cva(
  `w-auto min-h-screen h-full 
  bg-gray-800 box-border flex
  pl-[264px]
  overflow-hidden`,
)

export const homeContent = cva(
  `flex flex-col gap-10 
  px-24 pt-[72px] pb-12`,
)

export const title = cva(`text-white text-2xl bold flex items-center gap-3`)
