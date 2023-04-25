import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const SignOutButton = createCVAComponent(
  'button',
  cva(
    `p-1 text-[#F75A68] h-[28px] w-[28px] flex items-center justify-center text-lg`,
  ),
)

export const signOutButton = cva(
  `p-1 text-[#F75A68] h-[28px] w-[28px] flex items-center justify-center text-lg`,
)

export const Name = createCVAComponent('p', cva(`text-gray-200 text-sm`))

export const name = cva(`text-gray-200 text-sm`)

export const SignOutContainer = createCVAComponent(
  'div',
  cva(`flex gap-3 items-center`),
)

export const signOutContainer = cva(`flex gap-3 items-center`)
