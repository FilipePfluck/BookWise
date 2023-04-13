import { BookNameAndAuthor } from '../BookNameAndAuthor'
import { Stars } from '../Stars'

import * as S from './styles'

interface BookCardProps {
  bookName: string
  authorName: string
  src: string
  rate: number
  size?: 'sm' | 'md'
}

export const BookCard = ({ src, bookName, rate, size }: BookCardProps) => {
  return (
    <div className={S.bookCardContainer()}>
      <img className={S.bookCardImage({ size })} src={src} alt={bookName} />

      <div className={S.bookCardInfo()}>
        <BookNameAndAuthor name={bookName} author="George Orwell" />
        <Stars number={rate} />
      </div>
    </div>
  )
}
