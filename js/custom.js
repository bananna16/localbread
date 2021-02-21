let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.842674, lng: -117.257767 },
    zoom: 7,
  });
  var myLatLng = new google.maps.LatLng(32.842674, -117.257767);
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

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
