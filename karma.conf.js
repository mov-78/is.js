module.exports = function ( config ) {
  config.set( {
    frameworks : [ 'chai' , 'mocha' ] ,
    files : [ 'lib/**/*.js' , 'test/**/*.js' ]
  } )
}
