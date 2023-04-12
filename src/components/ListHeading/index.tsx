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
    <div className={S.ListHeadingContainer()}>
      <p className={S.ListHeadingTitle()}>{title}</p>
      {seeMoreButtonLabel && (
        <a className={S.ListHeadingLink()} href={seeMoreButtonLabel}>
          {seeMoreButtonLabel}
          <CaretRight />
        </a>
      )}
    </div>
  )
}
