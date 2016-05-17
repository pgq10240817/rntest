/**
 * Created by Administrator on 2016/5/17/017.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    DeviceEventEmitter,
} from 'react-native';
const MySimpleView = require('./app/view/MySimpleView');
const ToastTextView = require('./app/view/ToastTextView');
const ToastExt = require('./app/module/ToastExt');

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const divSly = {
            backgroundColor: 'whitesmoke',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        };
        const toastTextSly = {
            fontSize: 12,
            flex: 1,
            color: 'teal',
            backgroundColor: '#A2B5CD',
            width: 100,
            height: 100,
            padding: 10
        };
        return (
            <View style={divSly}>
                <ToastTextView text={'1111'}
                               style={toastTextSly}
                               onChange={this.onToastTextViewChange}
                />
                <ToastTextView {...this.props} style={toastTextSly}
                                               text={'这是ToastView'}
                                               onChange={this.onToastTextViewChange}
                />
            </View>
        )
    }

    onToastTextViewChange(e:Event) {
        console.log('onMyChange:' + e.nativeEvent.message);
        ToastExt.showShortToast('toast textView:' + e.nativeEvent.message);

    }


}

AppRegistry.registerComponent('Test2', ()=>MyComponent);