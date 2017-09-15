var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yoexpress'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/yoexpress-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'yoexpress'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/yoexpress-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yoexpress'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/yoexpress-production'
  }
};

module.exports = config[env];
