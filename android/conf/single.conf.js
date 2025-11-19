USERNAME =  'badoyap845',
ACCESS_KEY = process.env.LT_ACCESS_KEY,
  
exports.capabilities = {
    "platformName" : "android",
    "browserName" : "chrome",
    "LT:Options": {
		"username": "badoyap845",
		"accessKey": process.env.LT_ACCESS_KEY,
		"w3c": true,
		"plugin": "node_js-mocha",
        "platformName" : "android",
        "deviceName" : "Pixel.*",
        "platformVersion": "15",
        "isRealMobile": true,
        "build": "testRun",
        "name": "sampleTest",
        "appium:app" : "lt://APP10160211661761880228759927",
        "network": true,
        "visual": true,
        "geoLocation": "US"
	}
};

