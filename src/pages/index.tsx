import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import supportImg from '../assets/supportImg.svg';

import {Container, Main, Form, Categories, Aside} from '../styles/home';
import { SearchBar } from '../components/SearchBar/index';
import { Menu } from '../components/Menu/index';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>
      <Main>
        <Aside>
          <Image src={supportImg} alt="Imagem de Banner" />
        </Aside>
        <Form>
          <SearchBar />
          <Categories>
            <Menu />
            <Menu />
            <Menu />
          </Categories>
        </Form>
      </Main>
    </Container>
  )
}

export default Home
