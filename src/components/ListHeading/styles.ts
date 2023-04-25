import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const ListHeadingContainer = createCVAComponent(
  'div',
  cva(`flex items-center justify-between mb-4 h-[36px]`),
)

export const ListHeadingTitle = createCVAComponent(
  'p',
  cva(`text-gray-100 text-sm`),
)

export const ListHeadingLink = createCVAComponent(
  'a',
  cva(`p-2 text-purple-100 bold text-sm flex items-center gap-3`),
)
