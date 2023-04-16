import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Firebase config
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADprDnvky9DAVczpD3bHhsWlCN3ORRmyc",
    authDomain: "vue-firebase-auth-4c16c.firebaseapp.com",
    projectId: "vue-firebase-auth-4c16c",
    storageBucket: "vue-firebase-auth-4c16c.appspot.com",
    messagingSenderId: "853652868582",
    appId: "1:853652868582:web:e46b56adfbb0d30f1cda27",
    measurementId: "G-ZWQQLFW718"
  };

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
