/**
 * Created by Administrator on 2016/5/18/018.
 */
import React , {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';

const styles = {
    divRoot: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divBox: {
        borderColor: '#f00',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8C00',
        padding: 5,
    },
    divWeightEqaul: {
        flex: 1,
        padding: 0,
    },
    divVertical: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    label: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        width: 100,

    },
    labelDiv: {
        flex: 1,
        padding: 5,
    },
    divBorderLeftRight: {
        borderColor: '#fff',
        borderRightWidth: 2 / PixelRatio.get(),
        borderLeftWidth: 2 / PixelRatio.get(),
    },
    divLineHorizontal: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2 / PixelRatio.get(),
    }
}
class MyComponent extends Component {

    render() {
        return (
            <View style={styles.divRoot}>
                <View style={styles.divBox}>
                    <View style={[styles.divWeightEqaul,styles.divVertical]}>
                        <TouchableOpacity style={styles.labelDiv}>
                            <Text style={[styles.label]}>这是第一个</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[styles.divWeightEqaul,styles.divVertical,styles.divBorderLeftRight]}>
                        <TouchableOpacity style={styles.labelDiv}>
                            <Text style={[styles.label]}>这是第2个</Text>
                        </TouchableOpacity>
                        <View style={styles.divLineHorizontal}></View>
                        <TouchableOpacity style={styles.labelDiv}>
                            <Text style={[styles.label]}>这是第3个</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.divWeightEqaul,styles.divVertical]}>
                        <TouchableOpacity style={styles.labelDiv}>
                            <Text style={[styles.label]}>这是第4个</Text>
                        </TouchableOpacity>
                        <View style={styles.divLineHorizontal}></View>
                        <TouchableOpacity style={styles.labelDiv}>
                            <Text style={[styles.label]}>这是第5个</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

AppRegistry.registerComponent('Test2', ()=>MyComponent);