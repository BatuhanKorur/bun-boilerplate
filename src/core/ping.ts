import { config } from '.'
import { formatTime } from '@/utils'
/**
 * Generates a JSON response containing application status information.
 *
 * This function creates a response object with various details about the application's
 * current state, including its status, uptime, and version information.
 *
 * @param startTime - The timestamp when the application was started, in milliseconds since the Unix epoch.
 * @returns A Response object containing a JSON payload with the following properties:
 *   - status: Always "OK" to indicate the application is running.
 *   - timestamp: The current date and time in ISO 8601 format.
 *   - app_uptime: The number of milliseconds the application has been running.
 *   - app_uptime_readable: A human-readable string representing the application's uptime.
 *   - app_name: The name of the application, as defined in the config.
 *   - app_version: The version of the application, as defined in the config.
 */
export function ping(startTime: number) {
  const now = Date.now()
  return Response.json({
    status: 'OK',
    timestamp: new Date(now).toISOString(),
    app_uptime: now - startTime,
    app_uptime_readable: formatTime(now - startTime),
    app_name: config.app_name,
    app_version: config.app_version,
  })
}
