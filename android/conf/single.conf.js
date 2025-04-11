USERNAME =  process.env.BROWSERSTACK_USERNAME || 'rahulkumarlambdatest',
ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || 'CfViCjAWKL4e0nMDjzQgmx4ZeCHaZeycxgw4xaakQlApOJxMHQ',
  
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
        "platformversion": "15",
        "isRealMobile": true,
        "appium:app" : "lt://APP10160411451744399472575532",
	}
};
