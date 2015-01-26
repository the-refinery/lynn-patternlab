// Default variables
var path = require('path'),
	sourcePath = path.normalize('./source'),
	publicPath = path.normalize('./public'),
	distPath = path.normalize('./dist'),
	lrServer = 'localhost',
	lrPort = '35729';

// Use secret information instead
try {
	var conf = require('./secret.json')
} catch(e) {
	conf = {}
} finally {
	if(conf.sourcePath) {sourcePath = path.normalize(conf.sourcePath)}
	if(conf.publicPath) {publicPath = path.normalize(conf.publicPath)}
	if(conf.distPath) {distPath = path.normalize(conf.distPath)}
	if(conf.lrServer) {lrServer = conf.lrServer}
	if(conf.lrPort) {lrPort = conf.lrPort}
}

// Configuration settings passed to grunt tasks
module.exports = {
	sourcePath: sourcePath,
	publicPath: publicPath,
	distPath: distPath,

	livereload: {
		server: lrServer,
		port: lrPort
	},

	banner: '/*! <%= package.name %> - v<%= package.version %> - ' +
			'<%= grunt.template.today(\'yyyy-mm-dd\') %> */\n',

	sass: {
		src: path.join(sourcePath, 'css'),
		cache: path.join(sourcePath, '.sass-cache')
	},

	css: {
		src: path.join(sourcePath, 'css'),
		dest: path.join(publicPath, 'css')
	},

	fonts: {
		src: path.join(sourcePath, 'fonts')
	},

	img: {
		src: path.join(sourcePath, 'images')
	},

	js: {
		src: path.join(sourcePath, 'js'),
		dest: path.join(publicPath, 'js')
	}
};