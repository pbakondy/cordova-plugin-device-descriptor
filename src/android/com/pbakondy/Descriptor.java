package com.pbakondy;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONArray;
import org.json.JSONException;

public class Descriptor extends CordovaPlugin {

  private static final String GET_MODEL = "getModel";

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

    if (GET_MODEL.equals(action)) {
      String model = android.os.Build.MODEL;

      callbackContext.success(model);

      return true;
    }

    return false;
  }

}
