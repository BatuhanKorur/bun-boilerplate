import type { Err } from '@/types'
/**
 * Creates a JSON Response object from an error.
 *
 * @param error - An object of type Err containing error details.
 * @returns A Response object with the error details as JSON and the appropriate status code.
 */
export function err(error: Err): Response {
  return Response.json({ error }, {
    status: error.status,
  })
}
