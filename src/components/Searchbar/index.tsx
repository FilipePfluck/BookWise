import { MagnifyingGlass } from 'phosphor-react'

import * as S from './styles'

export const Searchbar = () => {
  return (
    <label htmlFor="search" className={S.inputContainer()}>
      <input
        id="search"
        className={S.input()}
        placeholder="Buscar livro ou autor"
      />
      <MagnifyingGlass className={S.icon()} />
    </label>
  )
}
