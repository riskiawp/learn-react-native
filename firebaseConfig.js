import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBUZD6aT9w-bHTJUgPAE-sEQKLn2e5sdRE",
    authDomain: "firstproject-262ed.firebaseapp.com",
    projectId: "firstproject-262ed",
    storageBucket: "firstproject-262ed.appspot.com",
    messagingSenderId: "879681515241",
    appId: "1:879681515241:web:821a9cb999d59a0c49ca78",
    measurementId: "G-DVLR1JWP1M"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;