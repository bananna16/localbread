function processSignUp() {
    var name = document.getElementById("name").value;
    var org = document.getElementById("org").value;
    var email = document.getElementById("email").value;
    var pw = document.getElementById("pw").value;
    var confirmpw = document.getElementById("confirmpw").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, pw)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  
  }