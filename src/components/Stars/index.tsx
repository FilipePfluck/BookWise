import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { cx } from 'class-variance-authority'
import { Star as StarIcon, StarHalf as StarIconHalf } from 'phosphor-react'

interface StarProps {
  value: 0 | 0.5 | 1
}

interface StarsProps {
  number: number
  className?: string
}

const Star = ({ value }: StarProps) => {
  return (
    <div className="h-4 w-4 text-purple-100">
      {value === 0 && <StarIcon />}
      {value === 0.5 && <StarIconHalf weight="fill" />}
      {value === 1 && <StarIcon weight="fill" />}
    </div>
  )
}

export const Stars = ({ number, className = '' }: StarsProps) => {
  const array = Array.from({ length: 5 }, (_, i) => i)

  const starsContainer = cx(['flex items-center gap-1', className])

  return (
    <div className={starsContainer}>
      <VisuallyHidden.Root>
        This user rated this book as {number} out of 5
      </VisuallyHidden.Root>
      {array.map((i) => {
        if (number - i <= 0) return <Star key={i} value={0} />
        if (number - i === 0.5) return <Star key={i} value={0.5} />
        return <Star key={i} value={1} />
      })}
    </div>
  )
}
