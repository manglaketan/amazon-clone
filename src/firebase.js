import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBbBgfrNxRuK4tHIBcYYhXz-RdQAG4as-k",
	authDomain: "clone-a8a3b.firebaseapp.com",
	databaseURL: "https://clone-a8a3b.firebaseio.com",
	projectId: "clone-a8a3b",
	storageBucket: "clone-a8a3b.appspot.com",
	messagingSenderId: "271721026240",
	appId: "1:271721026240:web:e1b00727cb2469d22bd325",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
