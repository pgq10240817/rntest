/**
 * Created by Administrator on 2016/5/19/019.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    ToastAndroid,
    StyleSheet,
    View,
    Text,
} from 'react-native';
const KeyBoardComponent = require('./app/calculator/view/KeyBoardRender.native');
const ConsoleComponent = require('./app/calculator/view/ConsoleRender.native')
import FormulaeComponent from './app/calculator/view/FormulaeRender.native';

const AppDispatcher = require('./app/calculator/module/dispatcher/AppDispatcher');

const style = {
    divRoot: {
        padding: 20,
        flex: 1,
        backgroundColor: 'teal',
    },
    divConsole: {
        flex: 1,
        backgroundColor: '#ff0',
    },
    divFormulae: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#4c4c4c',
        padding: 20
    }
}
class MyComponent extends Component {

    _callBack(action) {
        console.log(' ---  onReceived:' + action);
        let keyVal = action.keyValue;
        //ToastAndroid.show(keyVal, ToastAndroid.SHORT);
        //return false;
        //reject();
    }

    componentWillMount() {
        console.log('componentWillMount');
        AppDispatcher.register(this._callBack);

    }


    componentDidMount() {
        //AppDispatcher.un
    }

    render() {
        return (
            <View style={style.divRoot}>
                <ConsoleComponent style={style.divConsole}></ConsoleComponent>
                <View style={style.divFormulae}>
                    <FormulaeComponent />
                </View>
                <KeyBoardComponent></KeyBoardComponent>
            </View>
        )
    }
}
AppRegistry.registerComponent('Test2', ()=>MyComponent);