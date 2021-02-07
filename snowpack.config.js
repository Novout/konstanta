const path = require('path');

module.exports = {
  plugins: [
    '@snowpack/plugin-webpack',
    ['@snowpack/plugin-babel', {
      "input": ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    }],
    ["@snowpack/plugin-run-script", {
      "cmd": "eslint src --ext .js",
      "watch": "esw -w --clear src --ext .js"
    }]
  ],
  alias: {
    '@': path.resolve(__dirname, './src')
  }
};