import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect } from 'react'

import { useToast } from '../hooks/useToast'
import { Container, Main, Categories, Aside, Footer, AuthButton } from '../styles/home'
import { Menu } from '../components/Menu/index'
import { Form } from '../components/Form/index'
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
          <Form />
          <Categories>
            <Menu title={menus.first_menu.title} />
            <Menu title={menus.second_menu.title} />
            <Menu title={menus.third_menu.title} />
          </Categories>
        </div>
      </Main>
      <Footer>
          ©️ 2021, <a href="http://localhost:3000"> <strong>Filipe Lima, </strong> All Rights Reserved.</a>
      </Footer>
    </Container>
  )
}

export default Home
