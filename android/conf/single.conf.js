USERNAME =  process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
exports.capabilities = {
    "platformName" : "android",
    "appium:deviceName" : "Google Pixel 6 Pro",
    "browserName" : "chrome",
    "appium:osVersion": "12.0",
    "appium:app" : "bs://<app-id>",
    'bstack:options' : {
        "projectName" : "Mocha Android Test Project",
        "buildName" : "browserstack-build-1",
        "sessionName" : "first_test",
        "userName" : USERNAME,
        "accessKey" : ACCESS_KEY,
        "debug" : true
    }
};
