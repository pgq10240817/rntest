package com.yhpl.view;

import android.app.UiModeManager;
import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.uimanager.events.TouchEventType;

/**
 * Created by pugq on 2016/5/17/017.
 */
public class ToastTextView extends TextView implements View.OnClickListener {
    public ToastTextView(Context context) {
        super(context);
        init();
    }

    public ToastTextView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public ToastTextView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        setOnClickListener(ToastTextView.this);
    }


    private void sendEventToJS(String content) {
        WritableMap event = Arguments.createMap();
        event.putString("message", content);

        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
    }

    @Override
    public void onClick(View v) {
        sendEventToJS(getText().toString());
    }
}
