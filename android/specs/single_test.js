const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const https = require("https");
const conf_file = process.argv[3] || 'conf/single.conf.js';


var capabilities = require('../' + conf_file).capabilities;
capabilities['LT:Options'].source = 'mocha:sample-appium-4:v1.0';

var buildDriver = function (capabilities) {
  return new Builder()
    .usingServer("https://mobile-hub.lambdatest.com/wd/hub")
    .withCapabilities(capabilities)
    .usingHttpAgent(
      new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 1000000,
      })
    )
    .build();
};

// Mocha test case
describe("Search Wikipedia Functionality", function () {
  this.timeout(0);
  var driver;

  beforeEach(function (done) {
    driver = buildDriver(capabilities);
    done();
  });

  it("should search Wikipedia", async function () {
    try {
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView"
            )
          ),
          30000
        )
        .click();

      var insertTextSelector = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView"
          ),
          30000
        )
      );
      await insertTextSelector.sendKeys("Bito PR");
      await driver.sleep(5000);

      var allProductsName = await driver.findElements(
        By.xpath(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout"
        )
      );

      assert(allProductsName.length > 0);
    
     
    } catch (e) {

      console.log("Error:", e.message);
     
    } finally {
      await driver.quit();
    }
  });
});

