import { SignOut as SignOutIcon } from 'phosphor-react'
import { Avatar } from '../Avatar'

import * as S from './styles'

interface SignOutProps {
  src: string
  name: string
  className?: string
}

export const SignOut = ({ name, src, className }: SignOutProps) => {
  return (
    <S.SignOutContainer variants={{ className }}>
      <Avatar src={src} name={name} size="sm" />
      <S.Name>Filipe Pfluck</S.Name>
      <S.SignOutButton>
        <SignOutIcon />
      </S.SignOutButton>
    </S.SignOutContainer>
  )
}
