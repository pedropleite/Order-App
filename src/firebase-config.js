import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyByvytSm32-2ktzE5GFFJP9f8LgmCoqyro',
    authDomain: 'food-order-app-412dd.firebaseapp.com',
    databaseURL: 'https://food-order-app-412dd-default-rtdb.firebaseio.com',
    projectId: 'food-order-app-412dd',
    storageBucket: 'food-order-app-412dd.appspot.com',
    messagingSenderId: '236157498041',
    appId: '1:236157498041:web:a9917d90128adb1a392168',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
