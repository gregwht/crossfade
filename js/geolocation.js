//JS - Geolocation

// Variables
var x = document.getElementById("coordinates");
var s = document.getElementById("state");

// Functinos
function TestGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition( TestMap, error, {maximumAge: 1000, timeout: 10000, enableHighAccuracy: true});
  }
  else {
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}

function TestMap(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  x.innerHTML = "Lattitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude +
                "<br>Accuracy: " + position.coords.accuracy;

  if (latitude >= 50 && longitude <= 0 ){
    s.innerHTML = "You are in Parliament Square Garden. Click below to visit Brian.";
  //  document.getElementById('audiotag1').controls = "controls";
    document.getElementById('button').disabled = false;
  } else {
    s.innerHTML = "Please make your way to Parliament Square Garden to visit Brian.";
    document.getElementById('button').disabled = true;
  }
}

function error() {
  x.innerHTML = "Cannot locate user."
};
