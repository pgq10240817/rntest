/**
 * Created by Administrator on 2016/5/19/019.
 */
import React , {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Platform,
} from 'react-native';
const styles = {
    keyboard: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    }
};
class Key extends Component {


    render() {
        const label = {
            fontSize: 16,
            color: '#f00',
        };
        const box = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
        return (
            <TouchableOpacity style={box}>
                <Text style={label}>{this.props.keySymbol}</Text>
            </TouchableOpacity>
        )
    }

}
const appRender = ()=> {
    return (
        <View style={styles.keyboard}>
            <View style={styles.row}>
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
export default appRender;

AppRegistry.registerComponent('SampleApp', () => appRender);