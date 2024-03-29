import { initializeApp } from "firebase/app"
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
    apiKey: "AIzaSyAfJ4G5Em-dTOLQ0YS4DlPNCTQy-fdgn4c",
    authDomain: "todo-manager-ebff1.firebaseapp.com",
    projectId: "todo-manager-ebff1",
    storageBucket: "todo-manager-ebff1.appspot.com",
    messagingSenderId: "704508955945",
    appId: "1:704508955945:web:2aaab21102b5e29e9efb38",
    measurementId: "G-D4NRETBSRL"
})

export const auth = getAuth(app);

(async () => {
    await setPersistence(auth, browserLocalPersistence);
})();

export default app
export const db = getFirestore(app)
