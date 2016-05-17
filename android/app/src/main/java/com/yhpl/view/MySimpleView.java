package com.yhpl.view;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by pugq on 2016/5/17/017.
 */
public class MySimpleView extends View {
    public MySimpleView(Context context) {
        super(context);
    }

    public MySimpleView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public MySimpleView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        Log.e("myTag", "onTouchEvent: " + event.getAction());
        onReceiveNativeEvent(event.getAction());
        return super.onTouchEvent(event);
    }

    public void onReceiveNativeEvent(int action) {
        WritableMap event = Arguments.createMap();
        event.putString("message", "action:" + action);
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
    }
}
