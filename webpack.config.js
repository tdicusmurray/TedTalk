module.exports = {
  // ... other configuration settings ...

  module: {
    rules: [
      {
        // Apply val-loader to specific files
        test:  /\.js|.jsx$/, // Replace with the pattern that matches your files
        use: 'val-loader'
      },
      // ... other rules ...
    ]
  }

  // ... other configuration settings ...
};
