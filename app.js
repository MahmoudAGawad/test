navigator.serviceWorker.register("/worker.js");

function doFetch() {
  fetch("/test").then(response => {
    console.log("Response:", response.body);
  }).catch(err => {
    console.error("Error while fetching:", err);
  });
}
