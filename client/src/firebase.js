import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBR_zc8PnW9DqeNloQqAun5lCJ__i_nBcE',
  authDomain: '375219.firebaseapp.com',
  projectId: 'youtube-375219',
  storageBucket: 'youtube-375219.appspot.com',
  messagingSenderId: '387506558523',
  appId: '1:387506558523:web:3451ee388b7cf323be6e1e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
