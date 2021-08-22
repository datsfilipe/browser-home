import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import React, { MouseEvent } from 'react';

import supportImg from '../assets/supportImg.svg';

import {Container, SearchBar, Main, Form, Menu, MenuContent, Categories} from '../styles/Home';

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
              <button type="button"></button>
              <input type="text" />
            </SearchBar>
          </div>
          <Categories>
            <Menu>
              <button type="button"></button>
              <span>Social</span>
              <MenuContent>
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </MenuContent>
            </Menu>
            <Menu>
              <button type="button">

              </button>
              <span>Study</span>
              <MenuContent>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              </MenuContent>
            </Menu>
            <Menu>
              <button type="button"></button>
              <span>Games</span>
              <MenuContent>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              </MenuContent>
            </Menu>
          </Categories>
        </Form>
      </Main>
    </Container>
  )
}

export default Home
