import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const RatingCardContainer = createCVAComponent(
  'section',
  cva(
    `p-6 rounded-lg 
   w-full max-w-[600px]
   flex flex-col gap-8 
  `,
    {
      variants: {
        isMine: {
          true: ['bg-gray-600'],
          false: ['bg-gray-700'],
        },
      },
      defaultVariants: {
        isMine: false,
      },
    },
  ),
)

export const RatingCardHeader = createCVAComponent(
  'header',
  cva(`w-full flex justify-between items-start`),
)
