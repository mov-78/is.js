var fs = require( 'fs' )
var yaml = require( 'js-yaml' )

module.exports = function ( config ) {

  var launchers = fs.readFileSync( './test/config/.launchers.yml' )
  var customLaunchers = yaml.safeLoad( launchers )

  config.set( {
    frameworks : [ 'jasmine' ] ,
    files : [ '../../lib/*.js' , '../../test/*.js' ] ,
    singleRun : true ,
    captureTimeout : 0 ,
    customLaunchers : customLaunchers ,
    browsers : Object.keys( customLaunchers ) ,
    reporters : [ 'dots' , 'saucelabs' ] ,
    sauceLabs : {
      startConnect : false ,
      tunnelIdentifier : process.env.TRAVIS_JOB_NUMBER
    }
  } )

}
