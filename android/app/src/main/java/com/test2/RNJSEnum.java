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
    }, EXAMPLE_FLEXBOX {
        @Override
        public String getJsModuleName() {
            return MODULE.EXAMPLE_FLEXBOX;
        }
    }, EXAMPLE_TRIP {
        @Override
        public String getJsModuleName() {
            return MODULE.EXAMPLE_TRIP;
        }
    }, EXAMPLE_NETNEWS {
        @Override
        public String getJsModuleName() {
            return MODULE.EXAMPLE_NETNEWS;
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
    }, CALCULATOR {
        @Override
        public String getJsModuleName() {
            return MODULE.CALCULATOR;
        }
    }, DAY30_1 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_1;
        }
    }, DAY30_2 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_2;
        }
    }, DAY30_3 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_3;
        }
    }, DAY30_4 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_4;
        }
    }, DAY30_5 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_5;
        }
    }, DAY30_6 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_6;
        }
    }, DAY30_7 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_7;
        }
    }, DAY30_8 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_8;
        }
    }, DAY30_9 {
        @Override
        public String getJsModuleName() {
            return MODULE.DAY30_9;
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
