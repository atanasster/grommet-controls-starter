const withTM = require('next-plugin-transpile-modules');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const initExport = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack (config) {
    return config
  },

  transpileModules: ['grommet-controls', 'grommet', 'grommet-icons']
};

module.exports = withBundleAnalyzer(withTM(initExport));
