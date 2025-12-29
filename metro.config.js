// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  server: {
    ...defaultConfig.server,
    port: 5000,
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        req.setTimeout(30000);
        res.setTimeout(30000);
        return middleware(req, res, next);
      };
    }
  },
  watcher: {
    ...defaultConfig.watcher,
    unstable_lazySha1: true,
  }
};
