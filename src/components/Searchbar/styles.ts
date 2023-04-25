import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const InputContainer = createCVAComponent(
  'label',
  cva(
    `flex gap-3 items-center justify-between 
  px-5 py-[15px] rounded 
  border border-gray-500 
  w-[433px] cursor-text focus-within:ring-2`,
  ),
)

export const Input = createCVAComponent(
  'input',
  cva(`bg-transparent w-full outline-0 text-gray-100 autofill:!bg-transparent`),
)
