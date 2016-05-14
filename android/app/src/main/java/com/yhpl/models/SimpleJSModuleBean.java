package com.yhpl.models;

/**
 * Created by pugq on 2016/5/14/014.
 */
public class SimpleJSModuleBean {
    public String componentName;
    public String moduleName;
    public int beanVal;

    @Override
    public String toString() {
        return "module:  " + moduleName;
    }
}
