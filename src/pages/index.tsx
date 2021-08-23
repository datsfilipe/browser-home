import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import supportImg from '../assets/support-img.svg';

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
            <Menu title="Social"  />
            <Menu title="Study"  />
            <Menu title="Games"  />
          </Categories>
        </Form>
      </Main>
      {/* <Footer>
        <a rel="noreferrer" href="https://iconscout.com/icons/down-arrow" target="_blank">Down Arrow Line Icon</a> on <a href="https://iconscout.com">Iconscout</a>
      </Footer> */}
    </Container>
  )
}

export default Home
