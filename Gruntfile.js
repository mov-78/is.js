module.exports = function ( grunt ) {

  require( 'load-grunt-tasks' )( grunt )

  grunt.initConfig( {
    watch : {
      is : {
        files : 'lib/is.js' ,
        tasks : 'uglify:is'
      }
    } ,
    uglify : {
      is : {
        options : {
          report : 'gzip' ,
          sourceMap : true ,
          sourceMapName : 'dist/is.min.map'
        } ,
        files : {
          'dist/is.min.js' : 'lib/is.js'
        }
      }
    }
  } )

  grunt.registerTask( 'default' , 'uglify:is' )

}
