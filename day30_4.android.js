/**
 * Created by Administrator on 2016/5/21/021.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
//import {CountTimeComponent} from './app/30days/day1/view/CountTimeRender2.native'
import ComponentDefault from './app/30days/day3/day3';
const styles = {
    divRoot: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    }


}


class MyComponent extends Component {
    render() {
        return (
            <Animated.View style={[styles.divRoot,{opacity:this.state.opacityAnim}]}>
                <ComponentDefault/>
            </Animated.View>
        )
    }
}
AppRegistry.registerComponent('Test2', ()=>MyComponent);

