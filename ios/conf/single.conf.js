// USERNAME =  process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
// ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
// exports.capabilities = {
//     "platformName" : "ios",
//     "appium:deviceName" : "iPhone 17",
//     "browserName" : "safari",
//     "appium:osVersion": "18.0",
//     "appium:app" : "bs://<app-id>",
//     'bstack:options' : {
//         "projectName" : "BStack Demo",
//         "buildName" : "browserstack-build-1",
//         "sessionName" : "BStack single mocha-js",
//         "userName" : USERNAME,
//         "accessKey" : ACCESS_KEY,
//         "debug" : true
//     }
// };

USERNAME =  'david.urrego.ext',
ACCESS_KEY = 'LT_KykGDXtj4dfgW7lF0vpkahSEIzfoDwegrpBL8dRAHOa05DV',
  
exports.capabilities = {
    "platformName" : "ios",
    "browserName" : "safari",
    "LT:Options": {
		"username": "david.urrego.ext",
		"accessKey": "LT_KykGDXtj4dfgW7lF0vpkahSEIzfoDwegrpBL8dRAHOa05DV",
		"w3c": true,
		"plugin": "node_js-mocha",
        "platformName" : "ios",
        "deviceName" : "iPhone.*",
        "platformVersion": "18.0",
        "isRealMobile": true,
        "build": "LT Test",
        "name": "sampleTest",
        "app" : "lt://APP10160211661761319470909626"
	}
};
