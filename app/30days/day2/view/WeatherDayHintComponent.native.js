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
        borderTopWidth: 1, borderBottomWidth: 1,
        borderColor: '#fff',
    },

    label: {
        margin: 5,
        color: "#fff",
        fontSize: 15,
    },


}
const mokeDate = '今天：今天大部多云。现在气温 15°；最高气温23°。';

class WeatherDayHintComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hint: mokeDate,
        };
    }


    render() {
        return (
            <View style={styles.divRoot}>
                <Text style={styles.label}>{this.state.hint}</Text>
            </View>

        )
    }
}

export default WeatherDayHintComponent;
module.exports = WeatherDayHintComponent;