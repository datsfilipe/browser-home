import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import accountImg from '../assets/account.svg';
import supportImg from '../assets/support-img.svg';

import {Container, Main, Categories, Aside, Footer, AuthButton} from '../styles/home';
import { Menu } from '../components/Menu/index';
import { Form } from '../components/Form/index';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  avatar: string;
}

const Home: NextPage = () => {

  const defaultUserTemplate = {
    id: '',
    name: 'Faça Login',
    avatar: accountImg
  }

  const [user, setUser] = useState<User>(defaultUserTemplate);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signIn () {
    if (user === defaultUserTemplate) {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    }
  }

  console.log(user)

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
          <Image src={supportImg} alt="Banner" />
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
        <a href="https://iconscout.com/icons/account" target="_blank">Account Icon</a> on <a href="https://iconscout.com">Iconscout</a>
      </Footer> */}
    </Container>
  )
}

export default Home
