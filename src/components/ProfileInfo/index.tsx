import { BookOpen } from 'phosphor-react'
import { Avatar } from '../Avatar'

import * as S from './styles'

const ProfileItem = () => {
  return (
    <S.ProfileItemContainer>
      <BookOpen className="text-green-100 h-8 w-8" />
      <S.ProfileItemContent>
        <S.ItemNumber>853</S.ItemNumber>
        <S.ItemStat>Páginas lidas</S.ItemStat>
      </S.ProfileItemContent>
    </S.ProfileItemContainer>
  )
}

export const ProfileInfo = () => {
  return (
    <S.ProfileInfoContainer>
      <S.AvatarAndName>
        <Avatar
          src="https://avatars.githubusercontent.com/u/124596139?v=4"
          name="Filipe Pfluck"
          size="lg"
        />
        <S.Name>Filipe Pfluck</S.Name>
        <S.JoinedOn>Membro desde 2019</S.JoinedOn>
      </S.AvatarAndName>
      <S.ProfileItemsContainer>
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
      </S.ProfileItemsContainer>
    </S.ProfileInfoContainer>
  )
}
