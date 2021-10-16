import { useEffect, useState } from 'react'

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'

import { auth } from '../services/firebase'
import { User } from '../types/user'
import { useToast } from '../hooks/useToast'

import accountImg from '../assets/account.svg'

export function useAuth () {
  const defaultUserTemplate = {
    id: '',
    name: 'Login',
    avatar: <string>accountImg
  }

  const { notify } = useToast()

  const [user, setUser] = useState<User>(defaultUserTemplate)
  const [verify, setVerify] = useState(false)
  const [alreadyRunning, setAlreadyRunning] = useState(false)

  async function signIn () {
    if (user === defaultUserTemplate) {
      if (alreadyRunning) return
      try {
        const provider = new GoogleAuthProvider()

        setAlreadyRunning(true)

        const result = await signInWithPopup(auth, provider)

        if (result.user) {
          const { displayName, photoURL, uid } = result.user

          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google account')
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        notify(err.message, '🚨')
      }
    } else if (verify === false) {
      notify('Clique novamente para sair da conta.', '❗')
      setVerify(true)
    } else {
      await auth.signOut()
      window.location.reload()
    }
    setTimeout(() => { setAlreadyRunning(false) }, 1000)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const value = { user, signIn }

  return value
}
