import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import supportImg from '../assets/supportImg.svg';

import {Container, SearchBar, Main, Form, Button} from '../styles/Home';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>
      <Main>
        <aside>
          <Image src={supportImg} alt="Imagem de Banner" />
        </aside>
        <Form>
          <div>
            <SearchBar>
              <button></button>
              <input type="text" />
            </SearchBar>
          </div>
          <div>
            <Button />
            Social
          </div>
          <div>
            <Button />
            Study
          </div>
          <div>
            <Button />
            Games
          </div>
        </Form>
      </Main>
    </Container>
  )
}

export default Home
