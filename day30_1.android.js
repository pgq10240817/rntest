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
import {TimerComponent,PannelComponent,TimerRecordComponent} from './app/30days/day1/view/CountTimeRender.native'
const styles = {
    divRoot: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
    divTop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
    listView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'whitesmoke',
    },

    divListView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'whitesmoke',
    },

}

class MyComponent extends Component {
    componentWillMount() {
        console.log('MyComponent  componentWillMount ');
    }

    componentWillUnMount() {
        console.log('MyComponent  componentWillUnMount ');
    }

    componentDidUnMount() {
        console.log('MyComponent  componentDidUnMount ');
    }

    componentDidMount() {
        console.log(' MyComponent componentDidMount ');
    }

    render() {
        return (
            <View style={styles.divRoot}>
                <View style={styles.divTop}>
                    <TimerComponent/>
                    <PannelComponent />
                </View>
                <View style={styles.divListView}>
                    <TimerRecordComponent style={styles.listView}/>
                </View>
            </View>
        )
    }
}
//class MyComponent extends Component {
//    render() {
//        return (
//            <View style={styles.divRoot}>
//                <CountTimeComponent/>
//            </View>
//        )
//    }
//}
AppRegistry.registerComponent('Test2', ()=>MyComponent);

