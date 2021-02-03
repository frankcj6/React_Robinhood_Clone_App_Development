import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAgqHEJ4wodV7v-J8Gk2vU3LeyD9IEYfwU",
    authDomain: "robindhood-a4967.firebaseapp.com",
    projectId: "robindhood-a4967",
    storageBucket: "robindhood-a4967.appspot.com",
    messagingSenderId: "427383911809",
    appId: "1:427383911809:web:956df1386ae10e73f06480",
    measurementId: "G-1T42PVZVW1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export {db}

