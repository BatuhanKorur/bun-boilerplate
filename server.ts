import { ping, err, config } from '@/core'
import { handlePostRequest } from '@/app'

const start_time = Date.now()
Bun.serve({
  async fetch(req) {
    const url = new URL(req.url)
    if (req.method === 'GET' && url.pathname === '/ping') {
      return ping(start_time)
    }
    if (req.method === 'POST') {
      return handlePostRequest(req)
    }
    return err({
      name: 'path_not_found',
      message: 'Path not found',
      status: 404,
    })
  },
  port: config.port,
})

console.log(`Server running on port ${config.port}`)
