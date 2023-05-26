import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCKXdZk6YD8rC64yq8pJuv_PrJUlFj-tIk',
    authDomain: 'uploadimg-4d2bd.firebaseapp.com',
    projectId: 'uploadimg-4d2bd',
    storageBucket: 'uploadimg-4d2bd.appspot.com',
    messagingSenderId: '484124534248',
    appId: '1:484124534248:web:ae150a2752a6afe3a7b05d',
};

const fbApp = initializeApp(firebaseConfig);
export const fbStorage = getStorage(fbApp);
