/**
 * Created by Administrator on 2016/5/21/021.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import AppDispatcher from '../module/dispatcher/AppDispatcher'
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
const TXT_RECORD = '计次';
const TXT_RESET = '复位';
const TXT_START = '开始';
const TXT_STOP = '停止';

class PannelComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            labelRecord: TXT_RECORD,
            labelRun: TXT_START,
        }

    }


    componentDidMount() {

    }


    _onButtonRunClicked() {
        //this.props.countComponent.start();

        let actionVal = this.state.labelRun === TXT_START ? 'start' : 'stop';
        let lableRunNext = this.state.labelRun === TXT_START ? TXT_STOP : TXT_START;
        let labelRecordNext = this.state.labelRun === TXT_START ? TXT_RECORD : TXT_RESET;
        AppDispatcher.handleViewAction({
            actionType: 'click',
            actionValue: actionVal,
        });

        this.setState({
            labelRun: lableRunNext,
            labelRecord: labelRecordNext,

        });
    }

    _onButtonRecordClicked() {
        let actionVal = this.state.labelRecord === TXT_RECORD ? 'record' : 'reset';
        let labelRecordNext = TXT_RECORD;
        if (this.state.labelRun === TXT_STOP) {//running
            //no-op
        } else {
            labelRecordNext = TXT_RESET;
        }
        AppDispatcher.handleViewAction({
            actionType: 'click',
            actionValue: actionVal,
        });
        this.setState({
            labelRecord: labelRecordNext,

        });
    }

    render() {

        return (
            <View style={styles.divRootPannel}>
                <TouchableOpacity style={styles.labelButtonDiv} onPress={this._onButtonRunClicked.bind(this)}>
                    <Text style={styles.labelButton}>{this.state.labelRun}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.labelButtonDiv} onPress={this._onButtonRecordClicked.bind(this)}>
                    <Text style={styles.labelButton}>{this.state.labelRecord}</Text>
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
            runFlag: false,
            dateBegin: new Date(),
            dateBeginSingle: new Date(),
            dateOffsetSingle: 0,
            dateOffset: 0,
        }
        this._count = this._count.bind(this);
        this._onPannelListener = this._onPannelListener.bind(this);
        //this.start = this.start.bind(this);
        //this.reset = this.reset.bind(this);
    }

    _onPannelListener(action) {
        let actionType = action.actionType;
        if (actionType === 'click') {
            let actionVal = action.actionValue;

            console.log('_onPannelListener ---> ' + actionVal);
            if (actionVal === 'start') {
                this.start();
            } else if (actionVal === 'reset') {
                this.reset();
            } else if (actionVal === 'record') {
                this.record();
            } else if (actionVal === 'stop') {
                this.stop();
            }
        }
    }

    componentWillMount() {
        console.log(' componentWillMount---> ');
    }

    componentDidMount() {
        console.log(' componentDidMount---> ');
        this.setState({
            dateBegin: new Date(),
            dateEnd: new Date(),
        });
        AppDispatcher.addListener(this._onPannelListener);

    }

    componentWillUnMount() {
        clearInterval(this.state.interval);
        AppDispatcher.removeListener(this._onPannelListener);
    }


    _getDuration = (date, offsetTime)=> {
        let offset = new Date() - date + offsetTime;
        let sec = (offset / 1000).toFixed();
        let min = (sec / 60).toFixed();
        let ms = offset % 1000;

        sec = sec % 60;
        min = min % 60;
        let _durationTotal = "";

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

        return _durationTotal;
    }
    _getDurationAsLong = (date)=> {
        return new Date() - date;
    }

    _count() {
        this.setState({
            durationTotal: this._getDuration(this.state.dateBegin, this.state.dateOffset),
            durationSingle: this._getDuration(this.state.dateBeginSingle, this.state.dateOffsetSingle),
        });

    }

    start() {
        clearInterval(this.state.interval);

        this.setState({
            dateBegin: new Date(),
            dateBeginSingle: new Date(),
            runFlag: true,
            durationTotal: this._getDuration(new Date(), this.state.dateOffset),
            durationSingle: this._getDuration(new Date(), this.state.dateOffsetSingle),
            interval: setInterval(this._count, 20),
        });
    }

    stop() {
        clearInterval(this.state.interval);
        let lastOffset = this._getDurationAsLong(this.state.dateBegin) + this.state.dateOffset;
        let lastOffsetSingle = this._getDurationAsLong(this.state.dateBeginSingle) + this.state.dateOffsetSingle;
        console.log('stop  :: ' + lastOffset);
        this.setState({
            runFlag: false,
            dateOffset: lastOffset,
            dateOffsetSingle: lastOffsetSingle,
            durationTotal: this._getDuration(this.state.dateBegin, this.state.dateOffset),
            durationSingle: this._getDuration(this.state.dateBeginSingle, this.state.dateOffsetSingle),
        });
    }

    reset() {
        clearInterval(this.state.interval);
        this.setState({
            dateBegin: null,
            dateBeginSingle: null,
            dateOffset: 0,
            dateOffsetSingle: 0,
            runFlag: false,
            durationTotal: initalTime,
            durationSingle: initalTime,
            interval: null,
        });
    }

    record() {
        let actionVal = this._getDuration(this.state.dateBeginSingle, this.state.dateOffsetSingle);
        AppDispatcher.handleViewAction({
            actionType: 'record',
            actionValue: actionVal,
        });
        this.setState({
            dateBeginSingle: new Date(),
        });
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
class TimerRecordComponent extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            data: [],
            dataSource: ds.cloneWithRows(['1', '2']),
        }
        this._onPannelListener = this._onPannelListener.bind(this);
    }

    _onPannelListener = (action)=> {
        let actionType = action.actionType;
        if (actionType === 'record') {
            let actionVal = action.actionValue;
            let dataNew = [actionVal, ...this.state.data];
            var ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState({
                data: dataNew,
                dataSource: ds.cloneWithRows(dataNew),
            });
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(['row 1', 'row 2', 'row 3'])
        });
        AppDispatcher.addListener(this._onPannelListener);
    }

    componentWillUnMount() {
        AppDispatcher.removeListener(this._onPannelListener);
    }

    _renderRow = (rowData:string, sectionID:number, rowID:number) => {
        //var rowHash = Math.abs(hashCode(rowData));
        //let labelStr = this.state.dataSource[rowHash % this.state.dataSource.length];
        let labelStr = '1111';
        return (
            <TouchableHighlight>
                <View>
                    <View>
                        <Text>
                            {rowData + ' - ' + labelStr}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }
}
export
default {
    CountTimeComponent
    ,
    PannelComponent
    ,
    TimerRecordComponent
}
;
module.exports = {CountTimeComponent, PannelComponent, TimerRecordComponent};