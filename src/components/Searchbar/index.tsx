import { MagnifyingGlass } from 'phosphor-react'

import * as S from './styles'

export const Searchbar = () => {
  return (
    <S.InputContainer htmlFor="search">
      <S.Input id="search" placeholder="Buscar livro ou autor" />
      <MagnifyingGlass className="text-gray-500 text-xl" />
    </S.InputContainer>
  )
}
