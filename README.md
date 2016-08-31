# cordova-plugin-device-descriptor

![Platform](https://img.shields.io/badge/platform-android%20%7C%20ios-lightgrey.svg)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R7STJ6V2PNEMA)

This is a cordova plugin to get device's descriptor based on model (brand, name).

Underlying components:
- [android-device-list](https://www.npmjs.com/package/android-device-list)
- [ios-device-list](https://www.npmjs.com/package/ios-device-list)

## Installation

```
cordova plugin add cordova-plugin-device-descriptor
```

## Supported Platforms

- Android
- iOS

## Usage

```js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.descriptor.get(successCallback, errorCallback);
}

function successCallback(result) {
  console.log(result);
}

function errorCallback(error) {
  console.log(error);
}
```

The plugin returns a JSON object.

### Android return value example

```js
{
  brand: "LGE",
  device: "p1",
  model: "LG-H815",
  name: "LG G4"
}
```

### iOS return value example

```js
{
  name: 'iPhone 5c',
  model: 'iPhone5,3',
  ANumber: [ 'A1456', 'A1532' ],
  FCCID: [ 'BCG‑E2644A' ]
}
```

## Author

### Peter Bakondy

- https://github.com/pbakondy

## LICENSE

**cordova-plugin-device-descriptor** is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
