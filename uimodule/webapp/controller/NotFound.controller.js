sap.ui.define(["sap/ui/core/mvc/Controller"], function (BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.demo.managementproduct.controller.NotFound", {
        /**
         * Navigates to the worklist when the link is pressed
         * @public
         */
        onLinkPressed: function () {
            this.getRouter().navTo("worklist");
        },
    });
});
