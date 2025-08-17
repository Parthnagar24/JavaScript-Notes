//3. navigator.geolocation

//Get user’s current location (latitude & longitude).

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}
