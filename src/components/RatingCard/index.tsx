import { useEffect, useState } from 'react'

import * as S from './styles'

import { BookNameAndAuthor } from '../BookNameAndAuthor'
import { RatingPoster } from '../RatingPoster'
import { Stars } from '../Stars'
import { ExpansibleText } from '../ExpansibleText'

interface RatingCardProps {
  poster: {
    name: string
    src: string
  }
  postedDate: string
  bookName: string
  bookAuthor: string
  bookSrc: string
  review: string
  rate: number
  isMine?: boolean
  className?: string
}

export const RatingCard = ({
  bookAuthor,
  bookName,
  bookSrc,
  postedDate,
  poster,
  review,
  rate,
  isMine = false,
  className,
}: RatingCardProps) => {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setShowText(true)
  }, [])

  return (
    <section className={S.ratingCardContainer({ isMine, className })}>
      {!isMine && (
        <header className={S.ratingCardHeader()}>
          <RatingPoster src={poster.src} name={poster.name} date={postedDate} />
          <Stars number={rate} />
        </header>
      )}
      <div className="w-full flex gap-5">
        <img
          className="w-[108px] h-[152px] rounded"
          src={bookSrc}
          alt={bookName}
        />

        <div className="flex flex-col gap-5 ">
          <div className="flex items-center justify-between">
            <BookNameAndAuthor name={bookName} author={bookAuthor} />
            {isMine && <Stars number={rate} />}
          </div>

          {showText && <ExpansibleText text={review} />}
        </div>
      </div>
    </section>
  )
}
