const requests = new Map<string, number[]>()

const WINDOW_MS = 60_000
const MAX_REQUESTS = 10

export function getClientAddress(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

export function isRateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (requests.get(key) ?? []).filter(timestamp => now - timestamp < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    requests.set(key, recent)
    return true
  }

  recent.push(now)
  requests.set(key, recent)
  return false
}

export function rateLimitResponse(): Response {
  return Response.json({ error: "Too many requests. Please try again later." }, {
    status: 429,
    headers: { "Retry-After": "60" },
  })
}

export function requestId(): string {
  return crypto.randomUUID()
}

export function errorResponse(message: string, status: number, id: string): Response {
  return Response.json({ error: message, requestId: id }, {
    status,
    headers: { "X-Request-ID": id },
  })
}
