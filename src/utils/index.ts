/**
 * Formats a given time in milliseconds into a human-readable string representation.
 *
 * @param time - The time to format, in milliseconds.
 * @returns A string representing the time in the format "Xd Yh Zm Ws", where:
 *          X is the number of days,
 *          Y is the number of hours (0-23),
 *          Z is the number of minutes (0-59),
 *          W is the number of seconds (0-59).
 */
export function formatTime(time: number): string {
  const seconds = Math.floor(time / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`
}
