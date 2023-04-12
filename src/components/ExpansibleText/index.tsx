import { cva } from 'class-variance-authority'
import { useRef, useState } from 'react'

import { useIsOverflow } from '@/hook/useIsOverflow'

interface ExpansibleTextProps {
  text: string
  height?: string
  amountOfVisibleCharacters?: number
}

export const ExpansibleText = ({
  text,
  height = '96px',
  amountOfVisibleCharacters = 230,
}: ExpansibleTextProps) => {
  const textContainerRef = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded((state) => !state)
  }

  const textVisibleWhenCollapsed = text.substring(0, amountOfVisibleCharacters)

  const hasOverflowed = useIsOverflow(textContainerRef)

  console.log({ hasOverflowed })

  const textContainer = cva('relative h-full', {
    variants: {
      isExpanded: {
        true: ['max-h-full'],
        false: [`max-h-[${height}]`],
      },
    },
  })

  return (
    <div className={textContainer({ isExpanded })} ref={textContainerRef}>
      <p className="text-gray-300 text-sm">
        {!hasOverflowed && text}
        {hasOverflowed && (
          <>
            {isExpanded ? text : `${textVisibleWhenCollapsed}...   `}
            <button className="bold text-purple-100" onClick={toggleExpanded}>
              {isExpanded ? 'ver menos' : 'ver mais'}
            </button>
          </>
        )}
      </p>
      <p className="absolute top-0 invisible">{text}</p>
    </div>
  )
}
