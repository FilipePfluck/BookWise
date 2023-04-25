import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const ProfileInfoContainer = createCVAComponent(
  'div',
  cva(`flex flex-col gap-10 px-[56px] border-l border-gray-700 ml-auto`),
)

export const AvatarAndName = createCVAComponent(
  'div',
  cva(`flex flex-col items-center w-[196px]`),
)

export const Name = createCVAComponent(
  'h2',
  cva(`text-gray-100 text-xl bold mt-5`),
)

export const JoinedOn = createCVAComponent('p', cva(`text-gray-400 text-sm`))

export const ProfileItemsContainer = createCVAComponent(
  'div',
  cva(`py-5 gap-10 flex flex-col w-full`),
)

export const ProfileItemContainer = createCVAComponent(
  'div',
  cva(`flex items-center gap-5 w-full`),
)

export const ProfileItemContent = createCVAComponent(
  'div',
  cva(`flex flex-col`),
)

export const ItemNumber = createCVAComponent(
  'strong',
  cva(`text-gray-200 bold`),
)

export const ItemStat = createCVAComponent('p', cva(`text-gray-300 text-sm`))
