USERNAME =  process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
exports.capabilities = {
    "platformName" : "ios",
    "appium:deviceName" : "iPhone 17",
    "browserName" : "safari",
    "appium:osVersion": "18.0",
    "appium:app" : "bs://<app-id>",
    'bstack:options' : {
        "projectName" : "BStack Demo",
        "buildName" : "browserstack-build-1",
        "sessionName" : "BStack single mocha-js",
        "userName" : USERNAME,
        "accessKey" : ACCESS_KEY,
        "debug" : true
    }
};
