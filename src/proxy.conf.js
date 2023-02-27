const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "http://localhost:5094/api/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
