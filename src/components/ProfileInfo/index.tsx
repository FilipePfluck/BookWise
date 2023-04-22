import { BookOpen } from 'phosphor-react'
import { Avatar } from '../Avatar'

import * as S from './styles'
import { createCVAComponent } from '@/utils/CVAComponent'

const ProfileItem = () => {
  return (
    <div className={S.profileItemContainer()}>
      <BookOpen className={S.profileItemIcon()} />
      <div className={S.profileItemContent()}>
        <strong className={S.itemNumber()}>853</strong>
        <p className={S.itemStat()}>Páginas lidas</p>
      </div>
    </div>
  )
}

const ProfileInfoContainer = createCVAComponent('div', S.profileInfoContainer)

export const ProfileInfo = () => {
  return (
    <ProfileInfoContainer>
      <div className={S.avatarAndName()}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/124596139?v=4"
          name="Filipe Pfluck"
          size="lg"
        />
        <h2 className={S.name()}>Filipe Pfluck</h2>
        <p className={S.joinedOn()}>Membro desde 2019</p>
      </div>
      <div className={S.profileItemsContainer()}>
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
      </div>
    </ProfileInfoContainer>
  )
}
