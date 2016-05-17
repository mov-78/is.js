/* eslint-env node */

module.exports = function ( config ) {
  config.set( {
    browsers : [ 'Chrome' ] ,
    files : [ 'lib/**/*.js' , 'test/**/*.js' ] ,
    frameworks : [ 'chai' , 'mocha' ] ,
    port : 9876 ,
    reporters : [ 'nyan' ]
  } )
}
