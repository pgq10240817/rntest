/**
 * Created by Administrator on 2016/5/18/018.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    AppRegistry,
    View,
    Text,
} from 'react-native';
const styles = {
    divRoot: {
        backgroundColor: 'whitesmoke',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divBox: {
        flex: 1,
        borderWidth: 2,
        flexDirection: 'column',
        borderColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    divBoxCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelVertical: {
        fontSize: 12,
        color: '#000',
        backgroundColor: '#698B22',
        textAlign: 'center',
    },
    divLabelHorizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    labelHorizontal: {
        fontSize: 12,
        color: '#000',
        backgroundColor: '#6495ED',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
}
class Box extends Component {
    render() {
        return (
            <View style={[styles.divBox,
                        {backgroundColor:'#ccc',
                        }]}>
                <Text style={styles.labelVertical}>top</Text>
                <View style={styles.divBoxCenter}>
                    <Text style={[styles.labelHorizontal,{width: 50}]}>left</Text>
                    {this.props.children}
                    <Text style={[styles.labelHorizontal,{width: 50}]}>right</Text>
                </View>
                <Text style={styles.labelVertical}>bottom</Text>
            </View>
        )
    }
}
class ElementBox extends Component {
    render() {
        return (
            <View
                style={[styles.divBox,
                    {backgroundColor:'#ddd',
                    justifyContent:'center',
                    alignItems:'center',
                    height: 100,
                    width:100,
                    }
                ]}>
                <Text>elementBox</Text>
            </View>
        )
    }
}
class MyComponent extends Component {

    render() {
        return (
            <View style={styles.divRoot}>
                <Box>
                    <Box>
                        <ElementBox/>
                    </Box>
                </Box>
            </View>

        );
    }
}

AppRegistry.registerComponent('Test2', ()=>MyComponent)
