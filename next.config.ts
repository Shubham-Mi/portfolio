import type { NextConfig } from "next"
import { projects } from "./src/lib/data"

const nextConfig: NextConfig = {
  async rewrites() {
    return projects
      .filter((p) => p.slug && p.deploymentUrl)
      .flatMap((p) => [
        {
          source: `/project/${p.slug}`,
          destination: p.deploymentUrl!,
        },
        {
          source: `/project/${p.slug}/:path*`,
          destination: `${p.deploymentUrl}/:path*`,
        },
      ])
  },
}

export default nextConfig
