import { cva } from 'class-variance-authority'

export const bookCardContainer = cva(
  `px-5  py-[18px] bg-gray-700  flex gap-5  rounded-lg `,
)

export const bookCardImage = cva(`rounded`, {
  variants: {
    size: {
      sm: 'w-16 h-[94px]',
      md: 'w-[108px] h-[152px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const bookCardInfo = cva(`flex flex-col justify-between`)
