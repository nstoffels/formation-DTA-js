// Project configuration.
module.exports=function(grunt){
grunt.initConfig({
  connect: {
    dev: {
      options: {
        port: 8080,
        base: 'public',
		open: true,
		keepalive:true
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-connect');
}