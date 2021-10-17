import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect } from 'react'

import { useToast } from '../hooks/useToast'
import { Container, Main, Categories, Aside, AuthButton } from '../styles/home'
import { Menu } from '../components/Menu'
import { SearchBar } from '../components/SearchBar'
import { useMenus } from '../hooks/useMenus'
import{ useAuth } from '../hooks/useAuth'

import supportImg from '../assets/support-img.svg'

const Home: NextPage = () => {
  const { menus, handleCreateMenus  } = useMenus()
  const { user, signIn } = useAuth()
  const { Toast } = useToast()

  useEffect(() => {
    handleCreateMenus(user.id)
  }, [user.id])

  return (

    <Container>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link rel="icon" href="app-icon.svg" />
      </Head>
      <Main>
        <AuthButton onClick={() => signIn()}>
          <Image
            src={user.avatar}
            alt="Usuário"
            width={24}
            height={24}
          />
          <p className="username">{user.name.split(' ')[0]}</p>
        </AuthButton>
        <Toast />
        <Aside>
          <Image src={supportImg} alt="Banner" />
        </Aside>
        <div id="container">
          <SearchBar />
          <Categories>
            <Menu title={menus.first_menu.title} />
            <Menu title={menus.second_menu.title} />
            <Menu title={menus.third_menu.title} />
          </Categories>
        </div>
      </Main>
      <footer>
        Copyright <a href="https://opensource.org/licenses/BSD-3-Clause" target="_blank" rel="noopener noreferrer">&copy; 2021, <strong>Filipe Lima</strong>, all rights reserved.</a>
      </footer>
    </Container>
  )
}

export default Home
