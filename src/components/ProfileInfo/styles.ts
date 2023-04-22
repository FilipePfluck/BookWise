import { cva } from 'class-variance-authority'

export const profileInfoContainer = cva(
  `flex flex-col gap-10 px-[56px] border-l border-gray-700 ml-auto`,
)

export const avatarAndName = cva(`flex flex-col items-center w-[196px]`)

export const name = cva(`text-gray-100 text-xl bold mt-5`)

export const joinedOn = cva(`text-gray-400 text-sm`)

export const profileItemsContainer = cva(`py-5 gap-10 flex flex-col w-full`)

export const profileItemContainer = cva(`flex items-center gap-5 w-full`)

export const profileItemIcon = cva(`text-green-100 h-8 w-8`)

export const profileItemContent = cva(`flex flex-col`)

export const itemNumber = cva(`text-gray-200 bold`)

export const itemStat = cva(`text-gray-300 text-sm`)
