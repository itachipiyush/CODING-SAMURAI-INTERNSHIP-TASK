
const firebaseConfig = {
    apiKey: "AIzaSyCe1ZSlFjeCs9WBqvvH1quXuvTGubDj7vI",
    authDomain: "blogging-website-a7636.firebaseapp.com",
    projectId: "blogging-website-a7636",
    storageBucket: "blogging-website-a7636.appspot.com",
    messagingSenderId: "650945368245",
    appId: "1:650945368245:web:4b20fc679f08e3b2812efc"
  };

  const app = firebase.initializeApp(firebaseConfig);

  let db= firebase.firestore();