import { createCVAComponent } from '@/utils/CVAComponent'
import { cva } from 'class-variance-authority'

export const FilterCategoryButton = createCVAComponent(
  'button',
  cva(`px-4 py-1 rounded-full border-2`, {
    variants: {
      isSelected: {
        true: `bg-purple-200 border-purple-200 text-gray-100`,
        false: `bg-transparent border-purple-100 text-purple-100`,
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  }),
)
