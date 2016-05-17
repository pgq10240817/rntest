package com.yhpl.models;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.toast.ToastModule;
import com.facebook.react.uimanager.ViewManager;
import com.yhpl.module.ToastExt;
import com.yhpl.viewManager.ReactMySimpleViewManager;
import com.yhpl.viewManager.ReactToastViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by pugq on 2016/5/17/017.
 */
public class SimpleReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastExt(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> vmList = new ArrayList<>();
        vmList.add(new ReactMySimpleViewManager());
        vmList.add(new ReactToastViewManager());
        return vmList;
//        return Collections.emptyList();
    }
}
