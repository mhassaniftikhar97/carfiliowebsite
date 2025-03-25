/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Find the existing rule that handles SVG files
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      // Modify the file loader rule to ignore *.svg
      fileLoaderRule.exclude = /\.svg$/i;

      // Add a new rule specifically for SVG files
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts|md)x?$/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      });
    }

    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['avatar.vercel.sh'],
  },
};

module.exports = nextConfig;