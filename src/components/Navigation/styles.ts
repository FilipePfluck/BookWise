import { cva } from 'class-variance-authority'

export const navigationContainer = cva(
  `fixed left-1 top-1 bottom-1 
  flex flex-col rounded-xl  
  my-5 ml-5 p-12 
  bg-cover bg-no-repeat`,
)

export const navigationItem = cva(
  `flex items-center pl-5 gap-3 py-2 relative`,
  {
    variants: {
      isSelected: {
        true: `
        text-gray-100 bold 
        before:content-[''] before:w-1 before:h-6
        before:rounded-full before:absolute before:left-0

        before:bg-gradient-to-b 
        before:from-green-50 before:to-purple-50
      `,
        false: `text-gray-400`,
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
)
