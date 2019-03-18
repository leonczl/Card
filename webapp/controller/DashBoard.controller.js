sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("Card.controller.DashBoard", {
		onInit: function () {
			var cardManifests = new JSONModel();
			cardManifests.loadData("model/cardManifests.json");
			this.getView().setModel(cardManifests, "manifests");
		}

	});
});