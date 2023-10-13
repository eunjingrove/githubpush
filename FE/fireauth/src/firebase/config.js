import { initializeApp } from 'firebase/app';
import { Timestamp, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// 깃 허브에 노출되지 않도록 환경변수를 설정해야 함 -> config.js에 저장하고 gitignore에서 .env 추가 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();

const timestamp = Timestamp;

export { appFireStore, appAuth, timestamp }

