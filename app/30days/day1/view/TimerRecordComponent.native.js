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

export default TimerRecordComponent;
module.exports = TimerRecordComponent;