/**
 * Created by Administrator on 2016/5/23/023.
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

    divRootPannel: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'whitesmoke',
        height: 50,

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
export default PannelComponent;
module.exports = PannelComponent;
