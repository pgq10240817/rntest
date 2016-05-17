package com.test2;

import java.util.zip.Inflater;

/**
 * Created by pugq on 2016/5/14/014.
 */
public final class RNJSConsts {
    public interface COMPONENT {
        final static String DEFAULT_COMPONENT_NAME = "Test2";
    }

    public interface MODULE {
        final static String DEFAULT_JS_NAME = "home.android";
        final static String COUNT = "count.android";
        final static String FLEXBOX = "flexbox.android";
        static String ANIMATION = "animation.android";
        static String NAV = "nav.android";
        static String VIEW = "view.android";
    }

    public interface BUNDLE {
        String KEY_JS_TYPE = "jsType";

    }
}
