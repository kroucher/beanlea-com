export async function get() {
  const response = { message: "Hello World!" };
  console.log(response);
  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
