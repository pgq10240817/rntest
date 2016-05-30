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
import DisplayUtil from '../../../common/util/DisplayUtil'
const styles = {
    divRoot: {
        flexDirection: 'column',
    },
    divLeft: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    divCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 100,
    },
    divDay: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    labelDay: {
        width: 100,
    },
    icon: {
        color: "#fff",
    },
    label: {
        color: "#fff",
        fontSize: 15,
    },
    labelTemperature: {
        width: 20,
        marginRight: 10,
        textAlign: 'right',
    }


}
const mokeDate = [
    {title: '星期一', icon: 'ios-partlysunny', high: 18, low: 16},
    {title: "星期二", icon: "ios-rainy", high: 22, low: 14},
    {title: "星期三", icon: "ios-rainy", high: 21, low: 11},
    {title: "星期四", icon: "ios-rainy", high: 9, low: 7},
    {title: "星期五", icon: "ios-partlysunny", high: 12, low: 10},
    {title: "星期六", icon: "ios-partlysunny", high: 13, low: 11},
    {title: "星期日", icon: "ios-rainy", high: 17, low: 13},
    {title: "星期一", icon: "ios-partlysunny", high: 18, low: 14},
    {title: "星期二", icon: "ios-partlysunny", high: 22, low: 19},

];

class WeatherWeekComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            week: mokeDate,
        };
    }

    _renderDay(day, index) {
        return (
            <View style={styles.divDay} key={index}>
                <View style={styles.divLeft}>
                    <Text style={[styles.label]}>{day.title}</Text>
                </View>
                <View style={styles.divCenter}>
                    <Icon name={day.icon} size={25} style={[styles.icon]}></Icon>
                </View>
                <View style={styles.divRight}>
                    <Text style={[styles.label,styles.labelTemperature]}>{day.high}</Text>
                    <Text style={[styles.label,styles.labelTemperature]}>{day.low}</Text>
                </View>
            </View>
        )
    }

    _renderDays() {
        return mokeDate.map((day, index)=> {
            return this._renderDay(day, index);
        });
    }

    render() {
        return (
            <View style={styles.divRoot}>
                {this._renderDays()}
            </View>

        )
    }
}

export default WeatherWeekComponent;
module.exports = WeatherWeekComponent;