// Project configuration.
module.exports=function(grunt){
	grunt.initConfig({
		clean : {
			dev:['tmp/']
		},
		copy:{
			public:{
				src:['bower_components/**/angular.min.js','bower_components/**/bootstrap.min.css','bower_components/**/angular-route.min.js'],
				dest:'tmp/lib',
				expand:true,
				flatten : true
			},
			files:{
				src : ['listenjs.html'],
				dest:'tmp/'
			}
			
		},
		 connect: {
		dev: {
		  options: {
			port: 8080,
			base: 'tmp/',
			hostname:'localhost',
			//open: true,
			livereload:true,
		  }
		}
	  },
	  watch: {
		  dev: {
			files: [ 'tmp/**/*.*'],
			tasks:['copy'],
			options: {
			  livereload: true
			}
		  }
		}
	}) ;
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('bower',['copy','connect','watch','clean']);
}