import { Navigation } from '@/components/Navigation'
import { Binoculars } from 'phosphor-react'
import { Searchbar } from '@/components/Searchbar'
import { Filters } from '@/components/Filters'
import { BooksGrid } from '@/components/BooksGrid'

import * as S from './styles'

export const Explore = () => {
  return (
    <main className={S.exploreContainer()}>
      <Navigation />
      <div className={S.exploreContent()}>
        <header className="flex items-center justify-between">
          <h1 className={S.title()}>
            <Binoculars className="text-green-100" />
            Explorar
          </h1>
          <Searchbar />
        </header>

        <Filters />

        <BooksGrid />
      </div>
    </main>
  )
}
