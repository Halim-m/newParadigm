// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABBi016feMRauiq0R14nZZziZK44uAEFc",
    authDomain: "hackaton-8c417.firebaseapp.com",
    projectId: "hackaton-8c417",
    storageBucket: "hackaton-8c417.appspot.com",
    messagingSenderId: "826713008384",
    appId: "1:826713008384:web:48d4671ca1c63620e26be5"
};

// Initialize Firebase
const dbApp = initializeApp(firebaseConfig);
const db = getDatabase(dbApp);

//create
export function writePills(ecz, id, pills) {
    const db = getDatabase(dbApp);
    const reference = ref(db, ecz + "/" + id);
    set(reference, pills)
}
//read
export function getAll() {
    const db = getDatabase();
    const reference = ref(db, 'yorum/');
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        console.log(typeof (data));
    });
}

//update

//delete



