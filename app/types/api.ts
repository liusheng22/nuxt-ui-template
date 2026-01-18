/**
 * Template types for server/client communication.
 * Keep them small, JSON-serializable, and stable.
 */

export type ApiSuccess<T> = {
  ok: true
  data: T
}

export type ApiError = {
  ok: false
  error: {
    code: string
    message: string
  }
}

export type ApiResult<T> = ApiSuccess<T> | ApiError

export type Pagination = {
  page: number
  pageSize: number
}

export type Paginated<T> = {
  items: T[]
  total: number
  page: number
  pageSize: number
}
