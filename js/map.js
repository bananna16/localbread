/*
  Javascript file to initialize the google map API
*/

let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.720636, lng: -117.047575 },
    zoom: 10,
  });

  /*
  Marker for Regent's Pizza
  */
  var regentsLatLng = new google.maps.LatLng(32.873342, -117.218161);

  const regentsContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Regent\'s Pizza</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Pick up:</b> 11:00pm <br>" +
    "<b>Address:</b> 4150 Regents Park Row #100, La Jolla, CA 92037 <br>" +
    "<b>Description:</b> We have deep dish and New York style pizza." + "</p>" +
    "</div>" +
    "</div>";
  const regentsInfowindow = new google.maps.InfoWindow({
    content: regentsContentString,
  });
  const regentsMarker = new google.maps.Marker({
    position: regentsLatLng,
    map,
    title: "Regent\'s Pizza",
  });
  regentsMarker.addListener("click", () => {
    regentsInfowindow.open(map, regentsMarker);
  });

  /*
  Marker for Bob's Burritos
  */
 var bobLatLng = new google.maps.LatLng(32.842674, -117.257767);

 const bobContentString =
   '<div id="content">' +
   '<div id="siteNotice">' +
   "</div>" +
   '<h1 id="firstHeading" class="firstHeading">Bob\'s Burritos</h1>' +
   '<div id="bodyContent">' +
   "<p><b>Pick up:</b> 3:00pm - 5:00pm <br>" +
   "<b>Address:</b> 3432 Mira Mesa Blvd, San Diego 92126 <br>" +
   "<b>Description:</b> We have some vegetarian and chicken burritos." + "</p>" +
   "</div>" +
   "</div>";
 const bobInfowindow = new google.maps.InfoWindow({
   content: bobContentString,
 });
 const bobMarker = new google.maps.Marker({
   position: bobLatLng,
   map,
   title: "Bob\'s Burritos",
 });
 bobMarker.addListener("click", () => {
   bobInfowindow.open(map, bobMarker);
 });

  /*
  Marker for Olive Garden
  */
 var ogLatLng = new google.maps.LatLng(32.577135, -117.028205);

 const ogContentString =
   '<div id="content">' +
   '<div id="siteNotice">' +
   "</div>" +
   '<h1 id="firstHeading" class="firstHeading">Olive Garden</h1>' +
   '<div id="bodyContent">' +
   "<p><b>Pick up:</b> from 9:00 pm until supplies last<br>" +
   "<b>Address:</b> 5185 Avenida Playa del Sol, San Diego, CA 92154 <br>" +
   "<b>Description:</b> We have lots leftover from this weekend. We have garlic bread and pasta." + "</p>" +
   "</div>" +
   "</div>";
 const ogInfowindow = new google.maps.InfoWindow({
   content: ogContentString,
 });
 const ogMarker = new google.maps.Marker({
   position: ogLatLng,
   map,
   title: "Olive Garden",
 });
 ogMarker.addListener("click", () => {
   ogInfowindow.open(map, ogMarker);
 });

}

