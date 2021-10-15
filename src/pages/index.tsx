import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import { useEffect } from 'react';

import { useToast } from '../hooks/useToast';
import { Container, Main, Categories, Aside, Footer, AuthButton } from '../styles/home';
import { Menu } from '../components/Menu/index';
import { Form } from '../components/Form/index';
import { useMenus } from '../hooks/useMenus';
import{ useAuth } from '../hooks/useAuth';

import supportImg from '../assets/support-img.svg';

const Home: NextPage = () => {
  const { menus, handleCreateMenus  } = useMenus()
  const { user, signIn } = useAuth()
  const { Toast } = useToast()

  useEffect(() => {
    handleCreateMenus(user.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* <Footer>
        <a href="">Banner</a>/ with license: <a href="https://creativecommons.org/licenses/by/4.0/">Attribution 4.0 International (CC BY 4.0)</a>
        <a href="https://iconscout.com/icons/plus" target="_blank">Plus Icon</a> on <a href="https://iconscout.com">Iconscout</a>
        <a href="https://iconscout.com/icons/account" target="_blank">Account Icon</a> on <a href="https://iconscout.com">Iconscout</a>
        Dropdown menu icons by <a href="https://iconscout.com/contributors/font-awesome">Font Awesome</a> on <a href="https://iconscout.com">Iconscout</a>
        <a href="https://iconscout.com/icons/eyedropper" target="_blank">Eyedropper Icon</a> by <a href="https://iconscout.com/contributors/font-awesome" target="_blank">Font Awesome</a>
      </Footer> */}
    </Container>
  )
}

export default Home
