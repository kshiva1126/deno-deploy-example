addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello Deno!", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    })
  );
});