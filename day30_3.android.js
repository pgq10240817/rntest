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
import WeatherComponent from './app/30days/day2/day2';
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
            <View style={styles.divRoot}>
                <WeatherComponent/>
            </View>
        )
    }
}
AppRegistry.registerComponent('Test2', ()=>MyComponent);

