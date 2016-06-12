/* eslint camelcase:0 */

module.exports = function ( config ) {

  var customLaunchers = {
    sl_ie_6 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '6'
    } ,
    sl_ie_7 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '7'
    } ,
    sl_ie_8 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '8'
    } ,
    sl_ie_9 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '9'
    } ,
    sl_ie_10 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '10'
    } ,
    sl_ie_11 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '11'
    }
  }

  config.set( {
    singleRun : true ,
    customLaunchers : customLaunchers ,
    browsers : Object.keys( customLaunchers ) ,
    frameworks : [ 'expect' , 'mocha' ] ,
    files : [ '../lib/**/*.js' , '../test/**/*.js' ]
  } )

}
