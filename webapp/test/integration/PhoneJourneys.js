jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/test/app/test/integration/NavigationJourneyPhone",
		"com/test/app/test/integration/NotFoundJourneyPhone",
		"com/test/app/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});