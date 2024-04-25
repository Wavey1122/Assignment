// Request user geolocation and callback with lat, lon
function geolocation(page) {
  // Check if geolocation is supported by the browser
  if (navigator.geolocation) {
      // If supported, get the current position
      navigator.geolocation.getCurrentPosition(
          function(loc) { // Callback for permission granted
              // Redirect to the specified page with latitude and longitude parameters
              location.href = `${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`;
          },
          function() { // Callback for permission denied
              // Redirect to the specified page with default central Bristol coordinates
              location.href = `${page}?lat=51.454514&lon=-2.587910`;
          }
      );
  } else { // Geolocation not supported by the browser
      // Show an alert to the user
      alert("Geolocation is not supported by this browser.");
      // Redirect to the specified page with default central Bristol coordinates
      location.href = `${page}?lat=51.454514&lon=-2.587910`;
  }
}