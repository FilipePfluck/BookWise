import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const BookCardContainer = createCVAComponent(
  'div',
  cva(`px-5  py-[18px] bg-gray-700  flex gap-5  rounded-lg `),
)

export const BookCardImage = createCVAComponent(
  'img',
  cva(`rounded`, {
    variants: {
      size: {
        sm: 'w-16 h-[94px]',
        md: 'w-[108px] h-[152px]',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }),
)

export const BookCardInfo = createCVAComponent(
  'div',
  cva(`flex flex-col justify-between`),
)
