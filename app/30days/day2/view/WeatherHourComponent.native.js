/**
 * Created by Administrator on 2016/5/24/024.
 */
'use strict';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';

const styles = {
    divScrollView: {
        height: 100,
    },
    label: {
        fontSize: 14,
        color: '#fff',
    },
    icon: {
        color: '#fff',
    },
    divBox: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divHourBox: {
        margin: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    }
}
const HOURS = [{
    key: 101,
    time: "现在",
    icon: "ios-moon",
    degree: "15°",
    color: "rgba(255,255,255,1)"
}, {
    key: 102,
    time: "3时",
    icon: "ios-cloudy-night",
    degree: "15°",
    color: "rgba(255,255,255,0.8)"
}, {
    key: 103,
    time: "4时",
    icon: "ios-cloudy-night",
    degree: "16°",
    color: "rgba(255,255,255,0.8)"
}, {
    key: 104,
    time: "5时",
    icon: "ios-cloudy-night",
    degree: "16°",
    color: "rgba(255,255,255,0.8)"
}, {
    key: 105,
    time: "6时",
    icon: "ios-cloudy-night",
    degree: "16°",
    color: "rgba(255,255,255,0.8)"
}, {key: 106, time: "06:21", icon: "ios-sunny-outline", degree: "日出", color: "#fedf32"}, {
    key: 107,
    time: "7时",
    icon: "ios-partlysunny",
    degree: "16°",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 108,
    time: "8时",
    icon: "ios-partlysunny",
    degree: "18°",
    color: "rgba(255,255,255,0.9)"
}, {key: 109, time: "9时", icon: "ios-sunny", degree: "19°", color: "#fedf32"}, {
    key: 110,
    time: "10时",
    icon: "ios-sunny",
    degree: "122°",
    color: "#fedf32"
}, {key: 111, time: "11时", icon: "ios-sunny", degree: "23°", color: "#fedf32"}, {
    key: 112,
    time: "13时",
    icon: "ios-sunny",
    degree: "22°",
    color: "#fedf32"
}, {key: 113, time: "13时", icon: "ios-sunny", degree: "22°", color: "#fedf32"}, {
    key: 114,
    time: "14时",
    icon: "ios-partlysunny",
    degree: "16°",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 115,
    time: "15时",
    icon: "ios-partlysunny",
    degree: "22°",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 116,
    time: "16时",
    icon: "ios-partlysunny",
    degree: "21°",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 117,
    time: "17时",
    icon: "ios-partlysunny",
    degree: "19°",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 118,
    time: "18时",
    icon: "ios-partlysunny",
    degree: "18°",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 119,
    time: "18:06",
    icon: "ios-partlysunny-outline",
    degree: "日落",
    color: "rgba(255,255,255,0.9)"
}, {
    key: 120,
    time: "19时",
    icon: "ios-cloudy-night",
    degree: "18°",
    color: "rgba(255,255,255,0.8)"
}, {
    key: 121,
    time: "20时",
    icon: "ios-cloudy-night",
    degree: "18°",
    color: "rgba(255,255,255,0.8)"
}, {
    key: 122,
    time: "21时",
    icon: "ios-cloudy-night",
    degree: "18°",
    color: "rgba(255,255,255,0.8)"
}, {
    key: 123,
    time: "22时",
    icon: "ios-cloudy-night",
    degree: "17°",
    color: "rgba(255,255,255,0.8)"
}, {key: 124, time: "23时", icon: "ios-cloudy", degree: "17°", color: "rgba(255,255,255,0.8)"}, {
    key: 125,
    time: "0时",
    icon: "ios-cloudy",
    degree: "17°",
    color: "rgba(255,255,255,0.8)"
}, {key: 126, time: "1时", icon: "ios-cloudy", degree: "17°", color: "rgba(255,255,255,0.8)"}, {
    key: 127,
    time: "2时",
    icon: "ios-cloudy",
    degree: "17°",
    color: "rgba(255,255,255,0.8)"
}];
class WeatherHourComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hourData: {key: '', time: '18.', degree: '20C'},
        };
    }

    render() {
        let {hourData} = this.state;
        console.log(' --hourData ' + hourData + "," + hourData.time);

        const hourView = HOURS.map((hour, index)=> {
            return (
                <View style={styles.divHourBox} key={hour.key}>
                    <Text style={styles.label}>{hour.time}</Text>
                    <Icon style={styles.icon} name={hour.icon} size={25}></Icon>
                    <Text style={styles.label}>{hour.degree}</Text>
                </View>
            )
        });

        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}
                        style={styles.divScrollView}>
                <View style={styles.divBox}>
                    {hourView}
                </View>
            </ScrollView>

        )
    }
}

export default WeatherHourComponent;
module.exports = WeatherHourComponent;