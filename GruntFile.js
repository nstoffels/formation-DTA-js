module.exports=function(grunt){
	grunt.initConfig({
		copy:{
			main:{
				src:['public/**/*.js','public/**/*.css','public/**/*.html'],
				dest:'tmp/',
				expand:true
			}
		}
	}) ;
	grunt.loadNpmTasks('grunt-contrib-copy');
}