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
    divRoot: {
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divBottom: {
        alignSelf: 'stretch',
        marginTop: 20,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    divBottomLeft: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
    },
    divBottomCenter: {},
    divBottomRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    label: {
        fontSize: 15,
        color: '#fff',
    },
    labelRegin: {
        fontSize: 25,
        paddingBottom: 5,
    },
    labelWeather: {
        fontSize: 20,
    },
    labelTemperature: {
        fontSize: 85,
        fontWeight: "100",
    },
    labelDay: {
        fontSize: 18,
        fontWeight: "400",
    },
    labelDayTemperature: {
        width: 20,
        textAlign: 'right',
    }
}

const region = '广州';
const weather = '暴雨';
const temperature = '23°';
const weekDay = '星期一';
const dayHigh = 29;
const dayLow = 19;
class WeatherTopComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            region: region,
            weather: weather,
            temperature: temperature,
            weekDay: weekDay,
            dayHigh: dayHigh,
            dayLow: dayLow,
        };
    }

    render() {

        return (
            <View style={styles.divRoot}>
                <Text style={[styles.label,styles.labelRegin]}>{this.state.region}</Text>
                <Text style={[styles.label,styles.labelWeather]}>{this.state.weather}</Text>
                <Text style={[styles.label,styles.labelTemperature]}>{this.state.temperature}</Text>
                <View style={styles.divBottom}>
                    <View style={styles.divBottomLeft}>
                        <Text style={[styles.label,styles.labelDay,{marginRight:10}]}>{this.state.weekDay}</Text>
                        <Text style={[styles.label, styles.labelDay]}>{'今天'}</Text>
                    </View>
                    <View style={styles.divBottomRight}>
                        <Text style={[styles.label,styles.labelDayTemperature]}>{this.state.dayHigh}</Text>
                        <Text style={[styles.label, styles.labelDayTemperature]}>{this.state.dayLow}</Text>
                    </View>
                </View>
            </View>

        )
    }
}

export default WeatherTopComponent;
module.exports = WeatherTopComponent;