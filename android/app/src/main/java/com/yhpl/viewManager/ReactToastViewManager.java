package com.yhpl.viewManager;

import android.graphics.Color;
import android.support.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.yhpl.view.ToastTextView;

/**
 * Created by pugq on 2016/5/17/017.
 */
public class ReactToastViewManager extends SimpleViewManager<ToastTextView> {
    private final static String NAME = "ToastTextView";

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected ToastTextView createViewInstance(ThemedReactContext reactContext) {
        return new ToastTextView(reactContext);
    }

    @ReactProp(name = "text")
    public void setText(ToastTextView view, @Nullable String text) {
        view.setText(text);
    }

    @ReactProp(name = "textColor")
    public void setTextColor(ToastTextView view, @Nullable String textColor) {
        view.setTextColor(Color.parseColor(textColor));
    }

    @ReactProp(name = "textSize")
    public void setTextSize(ToastTextView view, @Nullable float textSize) {
        view.setTextSize(textSize);
    }
}
