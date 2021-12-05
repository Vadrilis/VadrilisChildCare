// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCioaBuR1nqPjKwTy5Qk-dO3KNzCz78Hb4",
authDomain: "vadrilis-child-care.firebaseapp.com",
projectId: "vadrilis-child-care",
storageBucket: "vadrilis-child-care.appspot.com",
messagingSenderId: "1081800788834",
appId: "1:1081800788834:web:f8475cae50f564c2c77a3b",
measurementId: "G-H4RTJCLR04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
