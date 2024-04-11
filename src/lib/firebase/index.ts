import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyB007q36vxq4AzXX4FMYjkGnQC6c7UEslY",

    authDomain: "pierog-bad66.firebaseapp.com",

    projectId: "pierog-bad66",

    storageBucket: "pierog-bad66.appspot.com",

    messagingSenderId: "282047725649",

    appId: "1:282047725649:web:4fd061da5b53bb16c67870"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

