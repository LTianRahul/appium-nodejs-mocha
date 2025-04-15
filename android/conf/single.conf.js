USERNAME =  '{LT_USERNAME}',
ACCESS_KEY = '{LT_ACCESS_KEY}',
  
exports.capabilities = {
    "platformName" : "android",
    "browserName" : "chrome",
    "LT:Options": {
		"username": "{LT_USERNAME}",
		"accessKey": "{LT_ACCESS_KEY",
		"w3c": true,
		"plugin": "node_js-mocha",
        "platformName" : "android",
        "deviceName" : "Pixel.*",
        "platformversion": "15",
        "isRealMobile": true,
        "appium:app" : "lt://APP10160411451744399472575532",
	}
};
