/**
 * Created by Administrator on 2016/5/17/017.
 */
import React,{Component} from 'react';
import {
    requireNativeComponent,
    PropTypes,
    ToastAndroid
} from 'react-native';
var iface = {
    name: 'MySimpleView',
    propTypes: {
        testID: PropTypes.string,
        renderToHardwareTextureAndroid: PropTypes.bool,
        onLayout: PropTypes.bool,
        importantForAccessibility: PropTypes.string,
        accessibilityLabel: PropTypes.string,
        accessibilityLiveRegion: PropTypes.string,
        accessibilityComponentType: PropTypes.string,
        onChangeMessage: React.PropTypes.func,
        nativeOnly: {onChange: true}
    },
};
class MySimpleView extends Component {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event:Event) {
        ToastAndroid.message('onChange');
        console.log('onChange:' + event);
        if (!this.props.onChangeMessage) {
            return;
        }
        this.props.onChangeMessage(event.nativeEvent.message);
    }

    render() {
        return <MySimpleView {...this.props} onChange={this._onChange}/>;
    }
}
MySimpleView.propTypes = {
    onChangeMessage: PropTypes.func,
}
//MyCustomView.propTypes = {
//    onChangeMessage: React.PropTypes.func,
//};
//module.exports = requireNativeComponent('MySimpleView', iface);
module.exports = requireNativeComponent('MySimpleView', MySimpleView, {
    nativeOnly: {
        onChange: true,
        renderToHardwareTextureAndroid: true,
        onLayout: true,
        accessibilityLiveRegion: true,
        accessibilityComponentType: true,
        importantForAccessibility: true,
        accessibilityLabel: true,
        testID: true,
    }
});

//var RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`, MyCustomView, {
//    nativeOnly: {onChange: true}
//});