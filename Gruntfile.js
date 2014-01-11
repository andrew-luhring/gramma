



var configureGrunt = function(grunt){
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    pkg: grunt.file.readJSON('package.json');
	var cfg = {
			// Common paths to be used by tasks
			paths: {
				swagAssets: './public'
			}
		,   pkg: grunt.file.readJSON('package.json')
		,   watch: {
				jshint: {

						options: {
							bitwise: true, curly: true, eqeqeq: true, forin: true, latedef: true, newcap: true, noarg: true, nonew: false, undef: true, strict: true, unused: false, trailing: true, node: true, laxcomma: true, smarttabs: true, debug: true, sub: true, supernew: true, browser: true, devel: true, jquery: true
						},
						files: ['/**/*.js' ]

				}
			,   'node-dev' : {
					script: ['controller.js']
				}
			}
		};
	grunt.initConfig(cfg);
	grunt.registerTask('validate', ['jshint']);
	grunt.registerTask('default', ['watch']);
}

module.exports = configureGrunt;
