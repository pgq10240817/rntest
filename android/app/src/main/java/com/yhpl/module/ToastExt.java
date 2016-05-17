package com.yhpl.module;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by pugq on 2016/5/17/017.
 */
public class ToastExt extends ReactContextBaseJavaModule {
    private final static String NAME = "ToastExt";
    private final static String TAG = "myTag";

    public ToastExt(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void showShortToast(String message) {
        Log.d(TAG, "showShortToast:" + message);
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();

    }

    @ReactMethod
    public void showLongToast(String message) {
        Log.d(TAG, "showLongToast:" + message);
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();

    }
}
