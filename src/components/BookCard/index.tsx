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
    <S.BookCardContainer>
      <S.BookCardImage variants={{ size }} src={src} alt={bookName} />

      <S.BookCardInfo>
        <BookNameAndAuthor name={bookName} author="George Orwell" />
        <Stars number={rate} />
      </S.BookCardInfo>
    </S.BookCardContainer>
  )
}
