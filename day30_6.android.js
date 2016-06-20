/**
 * Created by Administrator on 2016/5/21/021.
 */
'use strict';

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
    ViewPagerAndroid,
    AppRegistry,
} from 'react-native';
import Day6 from './app/30days/day6/day6';
import SpotifyComponent from './app/30days/day6/view/SpotifyComponent.android';
var styles = StyleSheet.create({});
class MyComponent extends Component {
    render() {
        return (
            <SpotifyComponent>
            </SpotifyComponent>
        )
    }
}

AppRegistry.registerComponent('Test2', ()=>MyComponent);

