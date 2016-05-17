/**
 * Created by Administrator on 2016/5/17/017.
 */
'use strict';
import React,{
    Component,
    PropTypes,
    requireNativeComponent,
}from 'react-native';

var ToastExt = require('./../module/ToastExt');

class ToastTextView extends Component {

    render() {
        return (<ToastTextView {...this.props}/>);
    }
}

ToastTextView.propTypes = {
    onChangeMessage: PropTypes.func,
    text: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    renderToHardwareTextureAndroid: PropTypes.bool,
    onLayout: PropTypes.bool,
    importantForAccessibility: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    accessibilityLiveRegion: PropTypes.string,
    accessibilityComponentType: PropTypes.string,
    testID: PropTypes.string
}

module.exports = requireNativeComponent('ToastTextView', ToastTextView, {
    nativeOnly: {}
});