package com.test2;

import android.os.Bundle;
import android.os.PersistableBundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends BaseActivity {

    private int mJsType = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        mJsType = getIntent().getIntExtra(RNJSConsts.BUNDLE.KEY_JS_TYPE, 0);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected RNJSEnum getJsEnum() {
        return RNJSEnum.getJsEnumByType(mJsType);
    }
}
