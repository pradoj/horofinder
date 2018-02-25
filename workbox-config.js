module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{js,css,png,xml,ico,html,svg,json,md}"
  ],
  "globIgnores": [
    "node_modules/**/*",
    "src/**/*",
    "package*.json",
    "README",
    "webpack.config.js",
    "workbox-config.js",
  ],
  "swDest": "sw.js",
  // "swSrc": "src/sw.js"
};