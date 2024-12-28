export function handlePostRequest(req: Request): Response {
  // Implement your POST logic here
  return Response.json({
    status: 'OK',
    message: 'Hello from Bun!',
    url: req.url,
    timestamp: new Date().toISOString(),
  })
}
