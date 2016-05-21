/**
 * Created by Administrator on 2016/5/20/020.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import ConsoleEventEmitter from '../controller/ConsoleEventEmitter'
const style = {
    boxDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#68cef2',
        padding: 14
    },
    label: {
        color: '#190d08',
        fontSize: 20,
        fontWeight: '200'
    }
}

class ConsoleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleMsg: ConsoleEventEmitter.getDisplayScreen(),
        }
        this._onConsoleWillChanged = this._onConsoleWillChanged.bind(this);
    }

    _getConsoleMsg() {
        let msg = ConsoleEventEmitter.getDisplayScreen();
        console.log('_getConsoleMsg:' + msg);
        return msg;

    }

    componentWillMount() {
        ConsoleEventEmitter.addChangeListener(this._onConsoleWillChanged);
        //this.setState(this._getConsoleMsg());
        //ConsoleController.addChangeListener(this._onConsoleWillChanged.bind(this));
    }

    componentDidUnMount() {
        ConsoleEventEmitter.removeChangeListener(this._onConsoleWillChanged);
    }

    _onConsoleWillChanged() {
        //console.log('_onConsoleWillChanged:' + Object.keys(this));
        this.setState({
            consoleMsg: this._getConsoleMsg(),
        });


    }

    render() {
        console.log('render:' + this.state.consoleMsg);
        return (
            <View style={style.boxDiv}>
                <Text style={style.label}>{this.state.consoleMsg}</Text>
            </View>
        )
    }
}
module.exports = ConsoleComponent;