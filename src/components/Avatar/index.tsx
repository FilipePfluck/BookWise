import * as S from './styles'

interface AvatarProps {
  src: string
  name: string
  size?: 'sm' | 'md' | 'lg'
}

export const Avatar = ({ name, src, size = 'md' }: AvatarProps) => {
  return (
    <S.AvatarBorder variants={{ size }}>
      <S.AvatarImage src={src} alt={name} variants={{ size }} />
    </S.AvatarBorder>
  )
}
