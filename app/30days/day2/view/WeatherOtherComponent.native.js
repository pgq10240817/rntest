/**
 * Created by Administrator on 2016/5/27/027.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import DisplayUtil from '../../../common/util/DisplayUtil'
const styles = {
    divRoot: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divSection: {
        marginTop: 4,
        marginBottom: 4,
    },
    divLabel: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    labelKey: {
        width: DisplayUtil.size.width / 2 - 15,
        color: "#fff",
        textAlign: "right",
        fontSize: 15,
    },
    labelValue: {
        width: DisplayUtil.size.width / 2,
        marginLeft: 15,
        flex: 1,
        fontSize: 15,
        color: "#fff",
    },
}

const mockSection = [
    [
        {key: '日出: ', value: '06:21',},
        {key: '日落: ', value: '18:06',}
    ],
    [
        {key: '降雨概率: ', value: '10%'},
        {key: '湿度: ', value: '94%'}
    ],
    [
        {key: '降雨概率: ', value: '10%'},
        {key: '湿度: ', value: '94%'}
    ],
    [
        {key: '风速: ', value: '东北偏北'},
        {key: '体感温度: ', value: '15°'}
    ],
    [
        {key: '降水量: ', value: '0.0 厘米'},
        {key: '气压: ', value: '1,016 百帕'}
    ],
    [
        {key: '能见度: ', value: '5.2 公里'},
        {key: '紫外线指数: ', value: '6'}
    ],
];

class WeatherOtherComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sections: mockSection,
        };
    }

    _renderPair(pair) {
        return (
            <View style={styles.divLabel} key={pair.key}>
                <Text style={styles.labelKey}>{pair.key}</Text>
                <Text style={styles.labelValue}>{pair.value}</Text>
            </View>
        )
    }

    _renderSections(sections) {
        return sections.map((section, index)=> {

            return (
                <View style={styles.divSection} key={index}>
                    {
                        section.map((pair, index)=> {
                            return this._renderPair(pair)
                        })
                    }
                </View>
            )
        });
    }


    render() {
        return (
            <View style={styles.divRoot}>
                {
                    this._renderSections(this.state.sections)
                }

            </View>
        )
    }
}

export default WeatherOtherComponent;
module.exports = WeatherOtherComponent;