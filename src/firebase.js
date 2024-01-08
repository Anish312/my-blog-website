import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; // Import storage module
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAEr3oyqSXrNU3QA4tk1yyIf4eyyOEKhNA",
  authDomain: "my-blog-website-c8296.firebaseapp.com",
  projectId: "my-blog-website-c8296",
  storageBucket: "my-blog-website-c8296.appspot.com",
  messagingSenderId: "497539521661",
  appId: "1:497539521661:web:59db662c3fa53cf7236514"
  });

  const fb = firebase;

  // Get a reference to the default storage service
  const storage = firebase.storage();
  
export { fb ,storage };
