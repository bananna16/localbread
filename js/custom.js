let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.842674, lng: -117.257767 },
    zoom: 8,
  });
}
