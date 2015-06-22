module.exports=function(grunt){
	grunt.initConfig({
		hello:{
			configNantes:'Nantes',
			configRennes:'Rennes'
		}
	});
	
	grunt.registerMultiTask('hello','Hello',function(){
		console.log('Hello grunt, depuis %s ! avec la config %s ', this.data, this.target);
	});
}