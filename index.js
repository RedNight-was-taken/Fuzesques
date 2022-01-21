
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4P13-uZbLxV66ieHkiPpvzNCHFNpi4ds",
  authDomain: "fuzesques2.firebaseapp.com",
  projectId: "fuzesques2",
  storageBucket: "fuzesques2.appspot.com",
  messagingSenderId: "1041309309952",
  appId: "1:1041309309952:web:37ef0ca31ac9f991ef4ce5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('yo').value

  database.ref('messages/' + username).set({
    email : email,
    username : username,
    message : say_something,
  })

  alert('Message envoyé à la FuzesqueCorp. Nous vous réponderons par votre email! ✨')
}
