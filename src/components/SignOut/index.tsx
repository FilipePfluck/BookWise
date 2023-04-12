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
    <div className={S.signOutContainer({ className })}>
      <Avatar src={src} name={name} size="sm" />
      <p className={S.name()}>Filipe Pfluck</p>
      <button className={S.signOutButton()}>
        <SignOutIcon />
      </button>
    </div>
  )
}
