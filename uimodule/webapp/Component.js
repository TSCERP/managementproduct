sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device", "sap/ui/demo/managementproduct/model/models"],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.Device} Device
     * @param {typeof sap.ui.demo.managementproduct.model.models} models
     */
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("sap.ui.demo.managementproduct.Component", {
            metadata: {
                manifest: "json",
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
        });
    }
);
