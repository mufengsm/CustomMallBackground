/* eslint-disable no-undef */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		proxy('/api', {
			target: 'https://douban.uieee.com',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
		})
	)
}