importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBLXDifxHEXGOzq0Qy0cIbOzT6VADlYxP4",
  authDomain: "chat-site-cerac.firebaseapp.com",
  projectId: "chat-site-cerac",
  messagingSenderId: "749792238651",
  appId: "1:749792238651:web:70f061841327384175501e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body
    }
  );
});