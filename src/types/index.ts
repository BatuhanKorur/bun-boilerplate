export interface Err extends Error {
  status: number
  code?: string
  details?: string
}
