const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Home route");
    }
    if (url.pathname === "/jobs") {
      return new Response("Job route");
    }
    return new Response("404");
  },
});

console.log(`Server running on port ${server.port}`);
