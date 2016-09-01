var apple_tv = cordova.require('cordova-plugin-device-descriptor.apple_tv-json');
var apple_watch = cordova.require('cordova-plugin-device-descriptor.apple_watch-json');
var ipad_mini = cordova.require('cordova-plugin-device-descriptor.ipad_mini-json');
var ipad = cordova.require('cordova-plugin-device-descriptor.ipad-json');
var iphone = cordova.require('cordova-plugin-device-descriptor.iphone-json');
var ipod_touch = cordova.require('cordova-plugin-device-descriptor.ipod_touch-json');

// cache
var descriptor = null;

module.exports = {
  get: function(successCallback, errorCallback) {
    if (descriptor) {
      successCallback(descriptor);
      return;
    }

    cordova.exec(
      function(model) {

        if (!model) {
          errorCallback();
          return;
        }

        try {
          var all = function () {

            var total = [].concat(apple_tv, apple_watch, ipad, ipad_mini,
              iphone, ipod_touch).map(
                function(v){
                  delete v.Bootrom;
                  delete v.InternalName;
                  delete v.Models;
                  delete v.Variant;

                  v.name = v.Generation;
                  delete v.Generation;

                  v.model = v.Identifier;
                  delete v.Identifier;

                  return v;
                });

            return total;
          }();

          all.forEach(function (d) {
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

        } catch(e) {
          errorCallback(e);
        }

      }, errorCallback, 'Descriptor', 'getModel', []
    );

  }
};
