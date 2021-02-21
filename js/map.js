/*
  Javascript file to initialize the google map API
*/

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

