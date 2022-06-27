const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.get("/menu", (req, res) => {
        res.json({ greeting: "hello"});
    });
};
