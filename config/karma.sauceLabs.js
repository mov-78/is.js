module.exports = function ( config ) {

  const customLaunchers = {
    SL_CHROME : {
      base : 'SauceLabs' ,
      browserName : 'chrome'
    } ,
    SL_FIREFOX : {
      base : 'SauceLabs' ,
      browserName : 'firefox'
    } ,
    SL_IE_6 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '6'
    } ,
    SL_IE_7 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '7'
    } ,
    SL_IE_8 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '8'
    } ,
    SL_IE_9 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '9'
    } ,
    SL_IE_10 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '10'
    } ,
    SL_IE_11 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '11'
    } ,
    SL_IOS_SAFARI_7 : {
      base : 'SauceLabs' ,
      browserName : 'iphone' ,
      platform : 'OS X 10.9' ,
      version : '7.0'
    } ,
    SL_IOS_SAFARI_8 : {
      base : 'SauceLabs' ,
      browserName : 'iphone' ,
      platform : 'OS X 10.9' ,
      version : '8.0'
    } ,
    SL_IOS_SAFARI_9 : {
      base : 'SauceLabs' ,
      browserName : 'iphone' ,
      platform : 'OS X 10.9' ,
      version : '9.0'
    }
  }

  config.set( Object.assign( {
    singleRun : true ,
    customLaunchers ,
    browsers : Object.keys( customLaunchers )
  } , require( './karma.base' ) ) )

}
