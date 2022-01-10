import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDTb6ZyxqvL-1HK5zOgaCt9ic4Q6IiTwgU',
  authDomain: 'group-chat-application-d051e.firebaseapp.com',
  projectId: 'group-chat-application-d051e',
  storageBucket: 'group-chat-application-d051e.appspot.com',
  messagingSenderId: '341702542050',
  appId: '1:341702542050:web:0f23df544856e5b15214bb',
  measurementId: 'G-YDRD3S2Y2Z',
}

const firebase = initializeApp(firebaseConfig)
export const firebaseStore = getFirestore(firebase)
export const firebaseAuth = getAuth(firebase)
export default firebase
