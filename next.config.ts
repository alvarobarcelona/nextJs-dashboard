import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    ppr:false
  }
  //The 'incremental' value allows you to adopt PPR for specific routes.
};

export default nextConfig;
