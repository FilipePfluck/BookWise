import { Navigation } from '@/components/Navigation'
import { User } from 'phosphor-react'

import * as S from './styles'
import { ProfileInfo } from '@/components/ProfileInfo'

export const Profile = () => {
  return (
    <main className={S.homeContainer()}>
      <Navigation />
      <div className={S.homeContent()}>
        <h1 className={S.title()}>
          <User className="text-green-100" />
          Perfil
        </h1>
        <div className="flex gap-16">
          <ProfileInfo />
        </div>
      </div>
    </main>
  )
}
