/**
 * Created by Administrator on 2016/5/19/019.
 */
/**
 * Created by Administrator on 2016/5/19/019.
 */
import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Platform,
} from 'react-native';

import CalculatorDispatcher from '../module/dispatcher/CalculatorDispatcher';
import ConsoleEventEmitter from  '../controller/ConsoleEventEmitter';

const styles = {
    keyboard: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    }


};
class Key extends Component {
    constructor(props) {
        super(props);
        // Bind callback methods to make `this` the correct context.
        this._onKeyClicked = this._onKeyClicked.bind(this);
    }

    _onKeyClicked() {
        console.log('click:' + this.props.keySymbol);
        CalculatorDispatcher.typeKey(this.props.keyType, this.props.keyValue);
        //ConsoleEventEmitter.emitChange();
    }

    render() {
        const label = {
            color: '#919191',
            fontSize: 20,
            fontWeight: '400'

        };
        const box = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',


        };
        const border = {
            borderWidth: 1,
            borderColor: '#f8f8f8'
        };
        return (
            <TouchableOpacity style={[box,border]} onPress={this._onKeyClicked}>
                <Text style={label}>{this.props.keySymbol}</Text>
            </TouchableOpacity>
        )
    }

}
const KeyBoardComponent = ()=> {
    return (
        <View style={styles.keyboard}>
            <View style={[styles.row,styles.borderTopBottom]}>
                <Key keyType='number' keyValue='1' keySymbol='1'/>
                <Key keyType='number' keyValue='2' keySymbol='2'/>
                <Key keyType='number' keyValue='3' keySymbol='3'/>
            </View>
            <View style={styles.row}>
                <Key keyType='number' keyValue='4' keySymbol='4'/>
                <Key keyType='number' keyValue='5' keySymbol='5'/>
                <Key keyType='number' keyValue='6' keySymbol='6'/>
            </View>
            <View style={styles.row}>
                <Key keyType='number' keyValue='7' keySymbol='7'/>
                <Key keyType='number' keyValue='8' keySymbol='8'/>
                <Key keyType='number' keyValue='9' keySymbol='9'/>
            </View>
            <View style={styles.row}>
                <Key keyType='number' keyValue='+-' keySymbol='+/-'/>
                <Key keyType='number' keyValue='0' keySymbol='0'/>
                <Key keyType='number' keyValue='.' keySymbol='.'/>
            </View>

            <View style={styles.row}>
                <Key keyType='operator' keyValue='divide' keySymbol='÷'/>
                <Key keyType='operator' keyValue='substract' keySymbol='-'/>
                <Key keyType='operator' keyValue='add' keySymbol='+'/>
                <Key keyType='operator' keyValue='multiply' keySymbol='x'/>
            </View>

            <View style={styles.row}>
                <Key keyType='action' keyValue='back' keySymbol='<<'/>
                <Key keyType='action' keyValue='equal' keySymbol='='/>
            </View>
        </View>
    );
}
//class KeyBoardComponent extends Component {
//    render() {
//        return (
//            <View style={styles.keyboard}>
//                <View style={[styles.row,styles.borderTopBottom]}>
//                    <Key keyType='number' keyValue='1' keySymbol='1'/>
//                    <Key keyType='number' keyValue='2' keySymbol='2'/>
//                    <Key keyType='number' keyValue='3' keySymbol='3'/>
//                </View>
//                <View style={styles.row}>
//                    <Key keyType='number' keyValue='4' keySymbol='4'/>
//                    <Key keyType='number' keyValue='5' keySymbol='5'/>
//                    <Key keyType='number' keyValue='6' keySymbol='6'/>
//                </View>
//                <View style={styles.row}>
//                    <Key keyType='number' keyValue='7' keySymbol='7'/>
//                    <Key keyType='number' keyValue='8' keySymbol='8'/>
//                    <Key keyType='number' keyValue='9' keySymbol='9'/>
//                </View>
//                <View style={styles.row}>
//                    <Key keyType='number' keyValue='+-' keySymbol='+/-'/>
//                    <Key keyType='number' keyValue='0' keySymbol='0'/>
//                    <Key keyType='number' keyValue='.' keySymbol='.'/>
//                </View>
//
//                <View style={styles.row}>
//                    <Key keyType='operator' keyValue='divide' keySymbol='÷'/>
//                    <Key keyType='operator' keyValue='substract' keySymbol='-'/>
//                    <Key keyType='operator' keyValue='add' keySymbol='+'/>
//                    <Key keyType='operator' keyValue='multiply' keySymbol='x'/>
//                </View>
//
//                <View style={styles.row}>
//                    <Key keyType='action' keyValue='back' keySymbol='<<'/>
//                    <Key keyType='action' keyValue='equal' keySymbol='='/>
//                </View>
//            </View>
//        );
//    }
//}
module.exports = KeyBoardComponent;

