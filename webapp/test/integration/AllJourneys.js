jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/test/app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/test/app/test/integration/pages/App",
	"com/test/app/test/integration/pages/Browser",
	"com/test/app/test/integration/pages/Master",
	"com/test/app/test/integration/pages/Detail",
	"com/test/app/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.test.app.view."
	});

	sap.ui.require([
		"com/test/app/test/integration/MasterJourney",
		"com/test/app/test/integration/NavigationJourney",
		"com/test/app/test/integration/NotFoundJourney",
		"com/test/app/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});