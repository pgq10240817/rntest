/**
 * Created by Administrator on 2016/5/21/021.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import DisplayUtil from './app/common/util/DisplayUtil'
//import {CountTimeComponent} from './app/30days/day1/view/CountTimeRender2.native'
import WeatherHourComponent from './app/30days/day2/view/WeatherHourComponent';
import WeatherOtherComponent from  './app/30days/day2/view/WeatherOtherComponent';
import WeatherWeekComponent from  './app/30days/day2/view/WeatherWeekComponent';
import WeatherDayHintComponent from  './app/30days/day2/view/WeatherDayHintComponent';
import WeatherTopComponent from   './app/30days/day2/view/WeatherTopComponent';
const styles = {
    divRoot: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
    wrapper: {},
    slide1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    divHourComponent: {
        width: DisplayUtil.size.width,
        paddingLeft: 0, paddingTop: 40, paddingBottom: 40, paddingRight: 0,
        flexDirection: "column",
        flexWrap: "nowrap"
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    }
    ,
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    borderVerical: {
        borderTopWidth: 1, borderBottomWidth: 1,
        borderColor: '#fff',
    }


}


class MyComponent extends Component {
    render() {
        const pageOne = ()=> {
            return (
                <WeatherHourComponent/>
            )
        }
        return (
            <View style={styles.divRoot}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={false} bounces={true}>
                    <View style={styles.slide1}>
                        <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
                            <View style={styles.divHourComponent}>
                                <WeatherTopComponent/>
                                <View style={styles.borderVerical}>
                                    <WeatherHourComponent />
                                </View>
                                <WeatherWeekComponent/>
                                <WeatherDayHintComponent/>
                                <WeatherOtherComponent/>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}
AppRegistry.registerComponent('Test2', ()=>MyComponent);

