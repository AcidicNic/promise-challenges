
/**
 * Live at https://nicc.io/promise-challenges/Promise-7/
 */

const latEle = document.getElementById('lat');
const lonEle = document.getElementById('lon');
const accuracyEle = document.getElementById('accuracy');
latEle.innerHTML = "Latitude: Unknown";
lonEle.innerHTML = "Longitude: Unknown";
accuracyEle.innerHTML = "Accuracy: Unknown";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getGeolocation(options) {
  return new Promise( (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  } )
}

getGeolocation(options)
  .then(pos => {
    const { latitude, longitude, accuracy } = pos.coords;
    latEle.innerHTML = `Latitude: ${latitude}`;
    lonEle.innerHTML = `Longitude: ${longitude}`;
    accuracyEle.innerHTML = `Accuracy: More or less ${accuracy} meters.`;
  })
  .catch(err => {
    latEle.innerHTML = "Latitude: Unknown";
    lonEle.innerHTML = "Longitude: Unknown";
    accuracyEle.innerHTML = "Accuracy: Unknown";
    console.warn(`ERROR(${err.code}): ${err.message}`);
  })

