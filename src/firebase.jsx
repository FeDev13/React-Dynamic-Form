import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDhRMktviKLZPIfHSXLnT7uNohHhpbbRPY",
  authDomain: "dynamic-form-40189.firebaseapp.com",
  projectId: "dynamic-form-40189",
  storageBucket: "dynamic-form-40189.appspot.com",
  messagingSenderId: "421582111983",
  appId: "1:421582111983:web:a7420de3937c8e920d471a",
});

const db = firebaseConfig.firestore(); //*inicializa la appi para poder mandar los datos a la db */

export { db };
