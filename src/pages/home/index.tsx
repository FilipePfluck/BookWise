import { PopularBooks } from '@/components/PopularBooks'
import { RecentRatings } from '@/components/RecentRatings'

import * as S from './styles'
import { ChartLineUp } from 'phosphor-react'
import { Navigation } from '@/components/Navigation'

export const Home = () => {
  return (
    <main className={S.homeContainer()}>
      <Navigation />
      <div className={S.homeContent()}>
        <h1 className={S.title()}>
          <ChartLineUp className="text-green-100" />
          Início
        </h1>
        <div className="flex gap-16">
          <RecentRatings />
          <PopularBooks />
        </div>
      </div>
    </main>
  )
}
