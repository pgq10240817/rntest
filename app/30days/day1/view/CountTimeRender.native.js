/**
 * Created by Administrator on 2016/5/21/021.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
const styles = {
    divRootCountTime: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'whitesmoke',
        height: 100,

    },
    divRootPannel: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'whitesmoke',
        height: 50,

    },
    labelDurationTotal: {
        fontSize: 40,
        color: '#222',
    },
    labelDurationSingle: {
        fontSize: 20,
        color: '#d3d3d3',
    },
    labelButtonDiv: {
        backgroundColor: 'teal',
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
    },
    labelButton: {
        color: '#f00',
    }

}
let sdurationTotal = 0;
let sdurationSingle = 0;
const initalTime = '00:00:000';

class PannelComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态

    }

    _onButtonStartClicked() {
        this.props.countComponent.start();
    }

    _onButtonStopClicked() {
        this.props.countComponent.reset();
    }

    render() {

        return (
            <View style={styles.divRootPannel}>
                <TouchableOpacity style={styles.labelButtonDiv} onPress={this._onButtonStartClicked}>
                    <Text style={styles.labelButton}>{'开始'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.labelButtonDiv} onPress={this._onButtonStopClicked()}>
                    <Text style={styles.labelButton}>{'停止'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
class CountTimeComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            interval: null,
            durationTotal: initalTime,
            durationSingle: initalTime,
            dateBegin: new Date(),
            dateEnd: new Date(),
        }
        this._count = this._count.bind(this);
    }

    _count() {
        sdurationTotal = sdurationTotal + 1;
        console.log("_durationTotal:" + sdurationTotal);
        let offset = new Date() - this.state.dateBegin;
        let sec = (offset / 1000).toFixed();
        let min = (sec / 60).toFixed();
        let ms = offset % 1000;

        sec = sec % 60;
        min = min % 60;
        let _durationTotal = "";

        _durationTotal = _durationTotal + hour + ":";
        if (min <= 9) {
            _durationTotal = _durationTotal + '0';
        }
        _durationTotal = _durationTotal + min + ":";
        if (sec <= 9) {
            _durationTotal = _durationTotal + '0';
        }
        _durationTotal = _durationTotal + sec + ":";
        if (ms <= 9) {
            _durationTotal = _durationTotal + '00';
        } else if (ms <= 99) {
            _durationTotal = _durationTotal + '0';
        }
        _durationTotal = _durationTotal + ms;


        this.setState({
            durationTotal: _durationTotal,
            durationSingle: _durationTotal,
        });

    }

    componentDidMount() {
        this.setState({
            dateBegin: new Date(),
            dateEnd: new Date(),
        });

    }

    componentWillUnMount() {
        clearInterval(this.state.interval);
    }


    start() {
        clearInterval(this.state.interval);
        this.setState({
            dateBegin: new Date(),
            dateEnd: new Date(),
            durationTotal: initalTime,
            durationSingle: initalTime,
            interval: setInterval(this._count, 100),
        });
    }

    reset() {
        clearInterval(this.state.interval);
        this.setState({
            dateBegin: null,
            dateEnd: null,
            durationTotal: initalTime,
            durationSingle: initalTime,
            interval: null,
        });
    }

    record() {

    }

    render() {
        return (
            <View style={styles.divRootCountTime}>
                <Text style={styles.labelDurationSingle}>{this.state.durationSingle}</Text>
                <Text style={styles.labelDurationTotal}>{this.state.durationTotal}</Text>
            </View>
        )
    }
}
export default {CountTimeComponent, PannelComponent};
module.exports = {CountTimeComponent, PannelComponent};