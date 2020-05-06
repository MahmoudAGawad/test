self.addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  console.log("Intercepted request from URL: ", url);
  if (url.pathname.startsWith("/test")) {
    var myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    var init = {headers: myHeaders};
    event.respondWith(new Response("Hello from worker!", init));
  }
});
