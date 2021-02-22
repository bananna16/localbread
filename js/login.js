function processLogIn() {
  var email = document.getElementById("email").value;
  var pw = document.getElementById("pw").value;

  firebase.auth().signInWithEmailAndPassword(email, pw)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

}