module.exports = {
  parallel: false,

  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },

  publicPath: process.env.PUBLICPATH || '',

  css: {
    loaderOptions: {
      postcss: {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        plugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('postcss-nested'),
          require('postcss-custom-properties'),
          require('autoprefixer'),
        ],
      },
    },
  },

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'your-profile',
      overrideEndpoint: false,
      endpoint: '',
      region: 'us-east-1',
      bucket: 'your-web-bucket-public',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      cloudfrontId: '',
      cloudfrontMatchers: '/*',
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5,
    },
  },
};
