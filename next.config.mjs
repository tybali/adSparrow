import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.tls = false;
          config.resolve.fallback.net = false;
          config.resolve.fallback.child_process = false;
        }
        return config;
    }
};

export default withNextVideo(nextConfig);