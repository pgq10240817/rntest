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
            animatedOpacity: new Animated.Value(0),
            animatedScale: new Animated.Value(1),
            isWelcome: false,
        }
        this._onLauchClicked = this._onLauchClicked.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    _onLauchClicked() {
        console.log('_onLauchClicked');
        this.setState({
            isWelcome: true,
            animatedOpacity: new Animated.Value(0),
            animatedScale: new Animated.Value(1),
        })
        this._startAnimation();
    }

    _startAnimation() {
        Animated.timing(this.state.animatedOpacity, {
            toValue: 1,
            duration: 5000,
            easing: Easing.elastic(2),
        }).start();
        Animated.timing(this.state.animatedScale, {
            toValue: 20,
            duration: 5000,
            easing: Easing.elastic(1),
        }).start();
    }

    _renderFrame() {

        let { isWelcome,animatedOpacity } = this.state;
        console.log('_renderFrame : ' + isWelcome);
        if (isWelcome) {
            return (
                <Animated.View style={[styles.divWelcome,{opacity:this.state.animatedOpacity}]}>
                    <AnimatedIcon size={50} name="social-twitter"
                                  style={[styles.icon, {transform:[{scale:this.state.animatedScale}]}]}>
                    </AnimatedIcon>
                </Animated.View>
            )
        } else {
            return (
                <TouchableOpacity onPress={this._onLauchClicked} style={styles.divLabel}>
                    <Text >{'启动'}</Text>
                </TouchableOpacity>
            )
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

