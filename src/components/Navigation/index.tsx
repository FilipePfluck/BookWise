import { Binoculars, ChartLineUp, User } from 'phosphor-react'
import { ReactElement, useEffect, useState } from 'react'

import * as S from './styles'
import { SignOut } from '../SignOut'
import Link from 'next/link'

interface NavigationItemProps {
  icon: ReactElement
  name: string
  isSelected?: boolean
}

const NavigationItem = ({ icon, name, isSelected }: NavigationItemProps) => {
  return (
    <li>
      <Link href="">
        <S.NavigationItem>
          {icon}
          <p>{name}</p>
        </S.NavigationItem>
      </Link>
    </li>
  )
}

const Test = () => {
  useEffect(() => {
    console.log('test rendered for the first time')
  }, [])

  return <p>Test</p>
}

export const Navigation = () => {
  const [, setIsTrue] = useState(false)

  return (
    <S.NavigationContainer style={{ backgroundImage: 'url(/sidebar-bg.png)' }}>
      <img src="/Logo.png" alt="" />
      <ul className="mt-16 flex flex-col gap-5">
        <NavigationItem
          icon={<ChartLineUp className="w-6 h-6" />}
          name="Início"
          isSelected
        />
        <NavigationItem
          icon={<Binoculars className="w-6 h-6" />}
          name="Explorar"
        />
        <NavigationItem icon={<User className="w-6 h-6" />} name="Perfil" />
      </ul>

      <S.Test variants={{ size: 'lg', color: 'blue' }}>
        <Test />
      </S.Test>

      <button onClick={() => setIsTrue((state) => !state)}>A</button>

      <SignOut
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        name="Filipe Pfluck"
        className="mt-auto"
      />
    </S.NavigationContainer>
  )
}
