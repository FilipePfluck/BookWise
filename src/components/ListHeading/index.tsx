import { CaretRight } from 'phosphor-react'

import * as S from './styles'

interface ListHeadingProps {
  title: string
  seeMoreButtonLabel?: string
  seeMoreButtonTarget?: string
}

export const ListHeading = ({
  title,
  seeMoreButtonLabel,
  seeMoreButtonTarget = '/',
}: ListHeadingProps) => {
  return (
    <S.ListHeadingContainer>
      <S.ListHeadingTitle>{title}</S.ListHeadingTitle>
      {seeMoreButtonLabel && (
        <S.ListHeadingLink href={seeMoreButtonLabel}>
          {seeMoreButtonLabel}
          <CaretRight />
        </S.ListHeadingLink>
      )}
    </S.ListHeadingContainer>
  )
}
