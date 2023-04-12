import * as S from './styles'

interface AvatarProps {
  src: string
  name: string
  size?: 'sm' | 'md'
}

export const Avatar = ({ name, src, size = 'md' }: AvatarProps) => {
  return (
    <div className={S.authorAvatarBorder({ size })}>
      <img src={src} alt={name} className={S.avatarImage({ size })} />
    </div>
  )
}
