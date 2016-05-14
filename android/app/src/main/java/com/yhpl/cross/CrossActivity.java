package com.yhpl.cross;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.test2.MainActivity;
import com.test2.R;
import com.test2.RNJSConsts;
import com.test2.RNJSEnum;
import com.yhpl.models.SimpleJSModuleBean;

import java.util.List;

/**
 * Created by pugq on 2016/5/14/014.
 */
public class CrossActivity extends Activity implements AdapterView.OnItemClickListener {
    private ListView mListView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cross);
        initViews();
    }

    private void initViews() {
        mListView = (ListView) findViewById(android.R.id.list);
        setAdapter();
    }

    private void setAdapter() {
        List<SimpleJSModuleBean> mModulesList = RNJSEnum.getModules();
        mListView.setAdapter(new ArrayAdapter<SimpleJSModuleBean>(this, android.R.layout.simple_list_item_1, android.R.id.text1,
                mModulesList) {
        });
        mListView.setOnItemClickListener(CrossActivity.this);
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        SimpleJSModuleBean bean = (SimpleJSModuleBean) parent.getAdapter().getItem(position);
        jumpToRNJSActivity(bean);

    }

    private void jumpToRNJSActivity(SimpleJSModuleBean bean) {
        Intent intent = new Intent();
        intent.setClass(this, MainActivity.class);
        intent.putExtra(RNJSConsts.BUNDLE.KEY_JS_TYPE, bean.beanVal);
        startActivity(intent);
    }
}
