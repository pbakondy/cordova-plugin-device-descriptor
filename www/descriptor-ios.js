var devices = cordova.require('cordova-plugin-device-descriptor.ios-devices-json');

// cache
var descriptor = null;

module.exports = {
  get: function(successCallback, errorCallback) {
    if (descriptor) {
      successCallback(descriptor);
      return;
    }

    cordova.exec(
      function (model) {

        if (!model) {
          errorCallback();
          return;
        }

        devices.forEach(function(d) {
          if (d.model === model) {
            descriptor = d;
            descriptor.brand = 'Apple';
          }
        });

        if (descriptor) {
          successCallback(descriptor);
        } else {
          errorCallback();
        }

      }, errorCallback, 'Descriptor', 'getModel', []
    );

  }
};
