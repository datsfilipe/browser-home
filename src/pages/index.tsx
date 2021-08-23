import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import supportImg from '../assets/support-img.svg';

import {Container, Main, Form, Categories, Aside, Footer} from '../styles/home';
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
      <a href="https://iconscout.com/icons/plus" target="_blank" rel="noreferrer">Plus Icon</a> on <a href="https://iconscout.com">Iconscout</a>
        <a href="">Banner</a>/ with license: <a href="https://creativecommons.org/licenses/by/4.0/">Attribution 4.0 International (CC BY 4.0)</a>
      </Footer> */}
    </Container>
  )
}

export default Home
