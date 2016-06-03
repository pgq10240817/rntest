/**
 * Created by Administrator on 2016/6/3/003.
 */
'use strict'
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Appdispatcher from '../dispatcher/AppDispatcher';
const DURATION_ANIMATION = 2000;
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const styles = {
    divRoot: {
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: 'teal',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {},
}
class WelcomeView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let initalOpacityAnimatedVal = new Animated.Value(0.4);
        initalOpacityAnimatedVal.addListener(this._onAnimationListener);
        initalOpacityAnimatedVal.parent = this;
        let initalSacleAnimatedVal = new Animated.Value(1);
        //initalSacleAnimatedVal.addListener(this._onAnimationListener);
        this.state = {
            animatedOpacity: initalOpacityAnimatedVal,
            animatedScale: initalSacleAnimatedVal,
        };
        this.startAnimation = this.startAnimation.bind(this);
        //this._onAnimationEnd = this._onAnimationEnd.bind(this);
    }

    _onAnimationListener(target) {
        console.log('_onAnimationListener___>' + target.value);
        if (target.value >= 1.0) {
            //this.parent._onAnimationEnd();
            Appdispatcher.handleViewAction({'action': 'finish', 'page': 'welcome'});
        }
    }

    startAnimation() {
        Animated.timing(this.state.animatedOpacity, {
            toValue: 1,
            duration: DURATION_ANIMATION,
            easing: Easing.linear(),
        }).start();
        Animated.timing(this.state.animatedScale, {
            toValue: 20,
            duration: DURATION_ANIMATION,
            easing: Easing.elastic(1),
        }).start();
    }


    componentDidMount() {
        console.log('--->>  componentDidMount');
        this.startAnimation();
    }


    render() {
        return (
            <Animated.View style={[styles.divRoot,{opacity:this.state.animatedOpacity}]}>
                <AnimatedIcon size={40} name="social-twitter"
                              style={[{transform:[{scale:this.state.animatedScale}]}]}></AnimatedIcon>
            </Animated.View>
        );
    }

}
export default WelcomeView;
module.exports = WelcomeView;