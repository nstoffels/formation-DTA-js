//sauvegrade des tests à exécuter dans GruntFiles

module.exports=function(grunt){
	grunt.registerTask('hello','hello Nantes',function(){
		console.log('hello Grunt, depuis Nantes !')
	});
	
	grunt.registerTask('etape1','Etape 1 visite Nantes',function(){
		console.log('Etape 1 visite de Nantes !')
	});
	
	grunt.registerTask('etape2','Etape 2 visite Nantes',function(){
		console.log('Etape 2 visite de Nantes !')
	});
	
	grunt.registerTask('etape3','Etape 3 visite Nantes',function(){
		console.log('Etape 3 visite de Nantes !')
	});
	
	grunt.registerTask('visite',['etape1','etape2','etape3']);
	
	grunt.registerTask('default','hello');
}

module.exports=function(grunt){
	grunt.initConfig({
		hello:{
			configNantes:'Nantes'
			configRennes:'Rennes'
		}
	});
	
	grunt.registerMultiTask('hello','Hello',function(){
		console.log('Hello grunt, depuis %s ! avec la config %s ', this.data, this.target);
	});
	grunt.registerTask('nantes','hello:configNantes'); //permet d'utiliser grunt nantes directement plutôt que grunt hello:configNantes

}
//à lancer d'abord avec grunt hello, puis avec grunt hello:configNantes

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
}//copie colle un fichier ailleurs
module.exports=function(grunt){
	grunt.initConfig({
		copy:{
			main:{
				files:{'tmp/':['public/**/*.js','public/**/*.css','public/**/*.html']},
				expand:true
			}
		}
	}) ;
	grunt.loadNpmTasks('grunt-contrib-copy');
}//tentative de faire comme plus haut, mais en moins bien ^^

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
}//ouvrir son petit serveur


// Project configuration.
module.exports=function(grunt){
grunt.initConfig({
	connect: {
    dev: {
      options: {
        port: 3000,
        //base: 'AngularJS-TP',
		open: true,
		livereload:true,
		hostname:'localhost'
      }
    }
  },
  watch: {
  dev: {
    files: [ '*.html', 'config/*.html' ],
    options: {
      livereload: true
    }
  }
}
});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('server',['connect','watch']);
}//changement en direct de sauvegarde de index.

