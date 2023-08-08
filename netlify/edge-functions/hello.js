export default async (request, context) => {
  context.log("Chamando hello.js edge function");

  return new Response("Hello, World do edge function!", {
    headers: { "content-type": "text/html" },
  });
};
