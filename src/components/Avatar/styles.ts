import { cva } from 'class-variance-authority'

export const authorAvatarBorder = cva(
  `rounded-full flex items-center justify-center 
  bg-gradient-to-b from-green-50 to-purple-50`,
  {
    variants: {
      size: {
        sm: `h-8 w-8`,
        md: `h-10 w-10`,
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const avatarImage = cva(`rounded-full`, {
  variants: {
    size: {
      sm: `h-[30px] w-[30px]`,
      md: `h-[38px] w-[38px]`,
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
