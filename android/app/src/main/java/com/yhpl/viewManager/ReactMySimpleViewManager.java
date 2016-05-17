package com.yhpl.viewManager;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.yhpl.view.MySimpleView;

/**
 * Created by pugq on 2016/5/17/017.
 */
public class ReactMySimpleViewManager extends SimpleViewManager<MySimpleView> {
    private final static String NAME = "MySimpleView";

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected MySimpleView createViewInstance(ThemedReactContext reactContext) {
        return new MySimpleView(reactContext);
    }


}
