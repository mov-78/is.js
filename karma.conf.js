module.exports = function ( config ) {
  config.set( {
    frameworks : [ 'expect' , 'mocha' ] ,
    files : [ 'lib/**/*.js' , 'test/**/*.js' ]
  } )
}
