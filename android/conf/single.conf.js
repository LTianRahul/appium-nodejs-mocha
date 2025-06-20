USERNAME =  'rahulkumarlambdatest',
ACCESS_KEY = 'CfViCjAWKL4e0nMDjzQgmx4ZeCHaZeycxgw4xaakQlApOJxMHQ',
  
exports.capabilities = {
    "platformName" : "android",
    "browserName" : "chrome",
    "LT:Options": {
		"username": "rahulkumarlambdatest",
		"accessKey": "CfViCjAWKL4e0nMDjzQgmx4ZeCHaZeycxgw4xaakQlApOJxMHQ",
		"w3c": true,
		"plugin": "node_js-mocha",
        "platformName" : "android",
        "deviceName" : "Pixel.*",
        "platformVersion": "15",
        "isRealMobile": true,
        "build": "testRun",
        "name": "sampleTest",
        "appium:app" : "lt://APP10160521601750440880142826",
        "network": true,
        "visual": true
	}
};
