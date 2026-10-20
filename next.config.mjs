/** @type {import('next').NextConfig} */
import path from "node:path"

const nextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
