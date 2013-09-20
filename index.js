"use strict";

var wd = require('selenium-webdriver');

function driverWrapper(driver) {

	this.driver = driver;
}

driverWrapper.prototype = {
	find: function(locator, el) {
		return (el ? el : this.driver).findElement(this.by(locator));
	},
	finds: function(locator, el) {
		return (el ? el : this.driver).findElements(this.by(locator));
	},
	present: function(locator, el) {
		return (el ? el : this.driver).isElementPresent(this.by(locator));
	},
	by: function(locator) {
		return wd.By[locator.type](locator.locator);
	}
}
module.exports = driverWrapper;