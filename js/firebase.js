  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDvovXPcD_0MdIUQ7HYHq4tnXloru-enns",
    authDomain: "localbread-fea00.firebaseapp.com",
    databaseURL: "https://localbread-fea00-default-rtdb.firebaseio.com",
    projectId: "localbread-fea00",
    storageBucket: "localbread-fea00.appspot.com",
    messagingSenderId: "671775974189",
    appId: "1:671775974189:web:c2faeacd5bac412da6a9a4",
    measurementId: "G-JFW650YZEM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  function processSignUp() {

    var email = document.getElementById("email");
    var pw = document.getElementById("pw");

    const promise = auth.createUserWithEmailAndPassword(email.value, pw.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

  }

  function processLogIn() {

    var email = document.getElementById("email");
    var pw = document.getElementById("pw");

    const promise = auth.signInWithEmailAndPassword(email.value, pw.value);
    promise.catch(e => alert(e.message));

    alert("Logged On");

  }

  function processSignOut() {

    auth.signOut();

    alert("Signed Out");

  }

  auth.onAuthStateChanged(function(user) {

    if (user){

    }

    else{

    }

  })