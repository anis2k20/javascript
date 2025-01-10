const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geo Location is not supported by this browser";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  const mapUrl = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&z=12&output=embed`;
  const map = document.getElementById("map");
  map.src = mapUrl;
}
