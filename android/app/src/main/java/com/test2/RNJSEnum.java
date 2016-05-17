package com.test2;

import com.yhpl.models.SimpleJSModuleBean;

import java.util.ArrayList;
import java.util.List;

import static com.test2.RNJSConsts.*;

/**
 * Created by pugq on 2016/5/14/014.
 */
public enum RNJSEnum implements RNIJSRes {

    DEFAULT {
        @Override
        public String getComponentName() {
            return COMPONENT.DEFAULT_COMPONENT_NAME;
        }

        @Override
        public String getJsModuleName() {
            return MODULE.DEFAULT_JS_NAME;
        }
    }, COUNT {
        @Override
        public String getJsModuleName() {
            return MODULE.COUNT;
        }
    }, FLEXBOX {
        @Override
        public String getJsModuleName() {
            return MODULE.FLEXBOX;
        }
    }, ANIMATION {
        @Override
        public String getJsModuleName() {
            return MODULE.ANIMATION;
        }
    }, NAV {
        @Override
        public String getJsModuleName() {
            return MODULE.NAV;
        }
    }, VIEW {
        @Override
        public String getJsModuleName() {
            return MODULE.VIEW;
        }
    }, BUTTON {
        @Override
        public String getJsModuleName() {
            return MODULE.BUTTON;
        }
    };


    private static List<SimpleJSModuleBean> moduleBeanList;

    public static List<SimpleJSModuleBean> getModules() {
        if (moduleBeanList != null) {
            return moduleBeanList;
        }
        RNJSEnum[] modules = RNJSEnum.values();
        int length = modules.length;
        moduleBeanList = new ArrayList<>(modules.length);
        for (int i = 0; i < length; i++) {
            RNJSEnum jsEnum = modules[i];
            SimpleJSModuleBean bean = new SimpleJSModuleBean();
            bean.beanVal = jsEnum.ordinal();
            bean.componentName = jsEnum.getComponentName();
            bean.moduleName = jsEnum.getJsModuleName();
            moduleBeanList.add(bean);
        }
        return moduleBeanList;
    }

    public static RNJSEnum getJsEnumByType(int type) {
        RNJSEnum[] modules = RNJSEnum.values();
        int length = modules.length;
        moduleBeanList = new ArrayList<>(modules.length);
        for (RNJSEnum jsEnum : values()) {
            if (jsEnum.ordinal() == type) {
                return jsEnum;
            }
        }
        return values()[0];
    }

    @Override
    public String getComponentName() {
        return COMPONENT.DEFAULT_COMPONENT_NAME;
    }


}
