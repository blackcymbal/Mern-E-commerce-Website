const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://proshop-backend115.herokuapp.com",
      //   target: "http://localhost:5000/api/",
      changeOrigin: true,
    })
  );
};
