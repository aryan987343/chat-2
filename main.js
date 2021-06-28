// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMuCipSt7W2y2qat-YCo1UfGmZ2gmMizw",
    authDomain: "chating-b697d.firebaseapp.com",
    databaseURL: "https://chating-b697d-default-rtdb.firebaseio.com",
    projectId: "chating-b697d",
    storageBucket: "chating-b697d.appspot.com",
    messagingSenderId: "221487963996",
    appId: "1:221487963996:web:d685c6d63a2b5b10ddab99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

  function add_user() {
    doc = document.getElementById("user_input").value;
    firebase.database().ref("/").child(doc).update({
        purpose: "nothing"
    });
  };