module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		root: "public/src/",
		
		sass: {
			dist: {
				files: {
					'<%= root %>css/app/styles.css' : '<%= root %>sass/app/*scss',
					'<%= root %>css/lib/main.css' : '<%= root %>sass/lib/*.scss'
				}
			}
		},
		watch: {
			css: {
				files: '<%= root%>sass/**/*.scss',
				tasks: ['sass']
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	grunt.registerTask('default', ['watch']);
}