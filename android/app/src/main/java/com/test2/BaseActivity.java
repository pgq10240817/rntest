package com.test2;

import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.yhpl.models.SimpleReactPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public abstract class BaseActivity extends ReactActivity {

    private final static String TAG = "myTag";


    protected abstract RNJSEnum getJsEnum();

    @Override
    protected String getMainComponentName() {
        return getJsEnum().getComponentName();
    }

    @Override
    protected String getJSMainModuleName() {
        String mModuleName = getJsEnum().getJsModuleName();
        Log.d(TAG, "getJSMainModuleName: " + mModuleName);
        return mModuleName;
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new VectorIconsPackage(),
                new SimpleReactPackage()
        );
    }
}
