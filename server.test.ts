import { config } from './src/core'
import { it, expect, describe } from 'bun:test'

describe('Bun should be up and running', () => {
  it('should respond to /ping GET request', async () => {
    const resp = await fetch(`localhost:${config.port}/ping`)
    expect(resp.status).toBe(200)
  })
})
