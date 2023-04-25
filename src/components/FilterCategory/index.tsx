import { useState } from 'react'

import * as S from './styles'

interface FilterCategoryProps {
  defaultSelected?: boolean
  name: string
}

export const FilterCategory = ({
  name,
  defaultSelected = false,
}: FilterCategoryProps) => {
  const [isSelected, setIsSelected] = useState(defaultSelected)

  const toggleIsSelected = () => {
    setIsSelected((state) => !state)
  }

  return (
    <S.FilterCategoryButton
      variants={{ isSelected }}
      onClick={toggleIsSelected}
    >
      {name}
    </S.FilterCategoryButton>
  )
}
