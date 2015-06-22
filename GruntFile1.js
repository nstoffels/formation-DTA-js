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
}
//à lancer d'abord avec grunt hello, puis avec grunt hello:configNantes