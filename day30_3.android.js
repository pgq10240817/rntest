/**
 * Created by Administrator on 2016/5/21/021.
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    AppRegistry,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
//import {CountTimeComponent} from './app/30days/day1/view/CountTimeRender2.native'
import WelcomeView from './app/30days/day3/view/WelcomeViewRender.native';
import MainFrameView from './app/30days/day3/view/MainFrameRender.native';
import Appdispatcher from './app/30days/day3/dispatcher/AppDispatcher';
import Icon from 'react-native-vector-icons/Ionicons';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
import ComponentDefault from './app/30days/day3/day3';
const styles = {
    divRoot: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divWelcome: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
    },
    icon: {
        color: '#fff',
    },
    divLabel: {
        padding: 10,
    }


}


class MyComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isWelcome: false,
            isMainFrame: false,
        }
        this._onLauchClicked = this._onLauchClicked.bind(this);
        this._onAppDispatcherListener = this._onAppDispatcherListener.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        Appdispatcher.addListener(this._onAppDispatcherListener);
    }

    _onAppDispatcherListener(payload) {
        let { action,page} = payload;
        console.log('appdispatch:action->' + action + " page>" + page);
        this.setState({
            isWelcome: false,
            isMainFrame: true,
        })
    }

    _onLauchClicked() {
        console.log('_onLauchClicked');
        this.setState({
            isWelcome: true,
        })
    }


    _renderFrame() {

        let { isWelcome,isMainFrame } = this.state;
        console.log('_renderFrame : ' + isWelcome);
        if (isWelcome) {
            return (
                <WelcomeView/>
            )
        } else {
            if (isMainFrame) {
                return (
                    <MainFrameView/>
                )
            } else {
                return (
                    <TouchableOpacity onPress={this._onLauchClicked} style={styles.divLabel}>
                        <Text >{'启动'}</Text>
                    </TouchableOpacity>
                )
            }

        }
    }

    render() {

        return (
            <View style={styles.divRoot}>
                {this._renderFrame()}
            </View>
        )
    }
}
AppRegistry.registerComponent('Test2', ()=>MyComponent);

