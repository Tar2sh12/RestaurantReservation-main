importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyDI92I5wlF1tpdlnk8bbGAFoXLadStUkNI",
    authDomain: "restaurantsnotification.firebaseapp.com",
    projectId: "restaurantsnotification",
    storageBucket: "restaurantsnotification.appspot.com",
    messagingSenderId: "69559399293",
    appId: "1:69559399293:web:bcca6b554a790423db5214"
});
const messaging = firebase.messaging();