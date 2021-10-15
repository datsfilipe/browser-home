import { useEffect, useState } from "react";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

import { auth } from "../services/firebase";
import { User } from '../types/user';
import { useToast } from '../hooks/useToast';

import accountImg from '../assets/account.svg';

export function useAuth () {
  const defaultUserTemplate = {
    id: '',
    name: 'Login',
    avatar: <string>accountImg
  }

  const { notify } = useToast()

  const [user, setUser] = useState<User>(defaultUserTemplate);
  const [verify, setVerify] = useState(false)

  async function signIn () {
    if (user === defaultUserTemplate) {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log(result)

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
    } else if (verify === false) {
      notify('Click again to logout from your Google account.', '💤');
      setVerify(true);
    } else {
      await auth.signOut();
      window.location.reload();
    }
  }

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

  const value = { user, signIn }

  return value
}
