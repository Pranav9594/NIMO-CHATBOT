/** @type {import('next').NextConfig} */
import path from "node:path"

const nextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: "default-src 'self'; connect-src 'self' https://generativelanguage.googleapis.com https://openrouter.ai https://va.vercel-scripts.com; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ]
  },
}

export default nextConfig
