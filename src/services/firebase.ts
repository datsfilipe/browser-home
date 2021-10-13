import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const database = getDatabase()

export { app, auth, database }
