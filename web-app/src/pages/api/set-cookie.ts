import type { APIRoute } from "astro";
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const requestBody = await request.json();
  console.log(requestBody);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Set-Cookie": `token=${JSON.stringify(requestBody)}; Path=/; HttpOnly; Secure; SameSite=Strict`,
      "Content-Type": "application/json"
    },
  });
};
