import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import supportImg from '../assets/support-img.svg';

import {Container, Main, Categories, Aside, Footer, AuthButton} from '../styles/home';
import { Menu } from '../components/Menu/index';
import { Form } from '../components/Form/index';

const Home: NextPage = () => {

  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>
      <Main>
        <AuthButton onClick={signIn}>
          <Image
            src={user.avatar}
            alt="Usuário"
            width={24}
            height={24}
          />
          {user.name}
        </AuthButton>
        <Aside>
          <Image src={supportImg} alt="Imagem de Banner" />
        </Aside>

        <div id="container">
          <Form />
          <Categories>
            <Menu title="Social"  />
            <Menu title="Study"  />
            <Menu title="Games"  />
          </Categories>
        </div>

      </Main>
      {/* <Footer>
        <a href="">Banner</a>/ with license: <a href="https://creativecommons.org/licenses/by/4.0/">Attribution 4.0 International (CC BY 4.0)</a>
        <a href="https://iconscout.com/icons/plus" target="_blank">Plus Icon</a> on <a href="https://iconscout.com">Iconscout</a>
      </Footer> */}
    </Container>
  )
}

export default Home
