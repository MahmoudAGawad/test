self.addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  console.log("Intercepted request from URL: ", url);
  if (url.pathname.startsWith("/test")) {
    var myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    var init = {headers: myHeaders};
    event.respondWith(new Response("Hello from worker!", init));
  }
  if(url.pathname.includes(".wbn")) {
    console.log("Loading .wbn...");
    fetch(event.request).then(function (response) {
        response.headers.append('Content-Type', 'application/webbundle;v=1');
        event.respondWith(response);
    });
  }
});
