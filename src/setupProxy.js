const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/reddit',
        createProxyMiddleware({
            target: 'https://www.reddit.com',
            changeOrigin: true,
            pathRewrite: { '^/reddit': '' },
            headers: {
                'User-Agent': 'web:subreddit-vibe-check:v1.0'
            }
        })
    );
};
