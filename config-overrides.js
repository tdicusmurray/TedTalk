module.exports = function override(config, env) {
  // Do stuff with the webpack config...
    config.output.filename = 'static/js/bundle.js';
  return config;
};