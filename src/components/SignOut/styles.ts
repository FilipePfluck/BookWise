import { cva } from 'class-variance-authority'

export const signOutButton = cva(
  `p-1 text-[#F75A68] h-[28px] w-[28px] flex items-center justify-center text-lg`,
)

export const name = cva(`text-gray-200 text-sm`)

export const signOutContainer = cva(`flex gap-3 items-center`)
