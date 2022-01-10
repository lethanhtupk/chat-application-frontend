import React, { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { collection, addDoc, getFirestore, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDTb6ZyxqvL-1HK5zOgaCt9ic4Q6IiTwgU',
  authDomain: 'group-chat-application-d051e.firebaseapp.com',
  projectId: 'group-chat-application-d051e',
  storageBucket: 'group-chat-application-d051e.appspot.com',
  messagingSenderId: '341702542050',
  appId: '1:341702542050:web:0f23df544856e5b15214bb',
  measurementId: 'G-YDRD3S2Y2Z',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const App = ({ title }: { title: string }) => {
  useEffect(() => {
    void (async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        console.log(`123${doc.id} => ${doc.data()}`)
      })
    })
  }, [])

  const onCreateUser = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>This is an application setup from scratch with full of features like</p>
      <ul>
        <li>Webpack as module bundler</li>
        <li>Babel for transpile code so newest Javascript features are available to use</li>
        <li>Eslint for enforced code style</li>
        <li>Prettier for auto formatting code</li>
        <li>
          Husky for linting code at pre-commit and pre-push. So everyone in team have a consistent code style despite
          difference setup
        </li>
        <p>
          You can have a look in{' '}
          <a href="https://tult.notion.site/Setup-a-react-application-from-scratch-0bdef4016c9f4fd9a3b0461e4d2d63d3">
            here
          </a>{' '}
          where I try my best to explain why we need these tools, dependencies and the instructation to set things up
          step by step.
        </p>
      </ul>
      <button type="button" onClick={onCreateUser}>
        Create user
      </button>
    </div>
  )
}

export default App
