import { cva } from 'class-variance-authority'

export const inputContainer = cva(
  `flex gap-3 items-center justify-between 
  px-5 py-[15px] rounded 
  border border-gray-500 
  w-[433px] cursor-text focus-within:ring-2`,
)

export const input = cva(
  `bg-transparent w-full outline-0 text-gray-100 autofill:!bg-transparent`,
)

export const icon = cva(`text-gray-500 text-xl`)
