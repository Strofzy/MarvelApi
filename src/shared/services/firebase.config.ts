import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCLOwq6rCssXnjlyvon3E3VpSRhi5BDz3Q',
    authDomain: 'marvel-app-7a3b3.firebaseapp.com',
    projectId: 'marvel-app-7a3b3',
    storageBucket: 'marvel-app-7a3b3.appspot.com',
    messagingSenderId: '395336910661',
    appId: '1:395336910661:web:eb826d8abd74e346e9a02c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
