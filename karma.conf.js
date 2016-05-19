module.exports = function ( config ) {
  config.set( {
    browsers : [ 'Chrome' ] ,
    files : [ 'lib/**/*.js' , 'test/**/*.js' ] ,
    frameworks : [ 'chai' , 'mocha' ] ,
    reporters : [ 'mocha' ]
  } )
}
