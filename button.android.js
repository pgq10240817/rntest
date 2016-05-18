/**
 * Created by Administrator on 2016/5/17/017.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
const APSLButton = require('./app/view/APSLButton');

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    textStyle: {
        color: 'white'
    },
    textStyle6: {
        color: '#8e44ad',
        fontFamily: 'Avenir',
        fontWeight: 'bold'
    },
    buttonStyle: {
        borderColor: '#f39c12',
        backgroundColor: '#f1c40f'
    },
    buttonStyle1: {
        borderColor: '#d35400',
        backgroundColor: '#e98b39'
    },
    buttonStyle2: {
        borderColor: '#c0392b',
        backgroundColor: '#e74c3c'
    },
    buttonStyle3: {
        borderColor: '#16a085',
        backgroundColor: '#1abc9c'
    },
    buttonStyle4: {
        borderColor: '#27ae60',
        backgroundColor: '#2ecc71'
    },
    buttonStyle5: {
        borderColor: '#2980b9',
        backgroundColor: '#3498db'
    },
    buttonStyle6: {
        borderColor: '#8e44ad',
        backgroundColor: '#9b59b6'
    },
    buttonStyle7: {
        borderColor: '#8e44ad',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 3,
    },
    buttonStyle8: {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
    },
    textStyle8: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#333',
    }
}
class MyButton extends Component {
    render() {
        const divBox = {
            backgroundColor: '#ccc',
            padding: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#f00'
        };
        const label = {
            fontSize: 16,
            color: '#f00',
        };
        return (
            <View >
                <TouchableOpacity style={divBox}>
                    <Text style={label}>
                        good...
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
class MyNativeButton extends Component {
    static propTypes = {
        background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
    };

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('--->:render');
        const divBox = {
            backgroundColor: '#ccc',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#f00',
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
        };
        const label = {
            fontSize: 16,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#f00',
            backgroundColor: '#0000EE',
        };
        const touchableProps = {
            onPress: this.props.onPress,
            onPressIn: this.props.onPressIn,
            onPressOut: this.props.onPressOut,
            onLongPress: this.props.onLongPress
        };
        const touchablePropsAndroid = Object.assign(touchableProps, {
            background: this.props.background || TouchableNativeFeedback.SelectableBackground()
        });
        return (
            <TouchableNativeFeedback {...touchablePropsAndroid} >
                <Text style={divBox}>
                    <Text style={label}>
                        good...
                    </Text>
                </Text>
            </TouchableNativeFeedback>

        )
    }

}
class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const divRootSly = {
            backgroundColor: '#009ACD',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 10,
        };
        return (
            <View style={divRootSly}>
                <MyNativeButton
                    onPress={()=>{
                        console.log('onPress');
                        }}
                    onPressIn={()=>{
                       console.log('onPressIn');
                    }}
                    onPressOut={()=>{
                       console.log('onPressOut');
                    }}
                    onLongPress={()=>{
                       console.log('onLongPress');
                    }}
                >
                </MyNativeButton>
                <APSLButton
                    style={styles.buttonStyle} textStyle={styles.textStyle}
                    onPress={() => {
                 console.log('world!')
                }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle1} textStyle={styles.textStyle}
                    onPress={() => {
                        console.log('world!')
                }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle2} textStyle={styles.textStyle}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle3} textStyle={styles.textStyle}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle4} textStyle={styles.textStyle}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle5} textStyle={styles.textStyle}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle6} textStyle={styles.textStyle}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton
                    style={styles.buttonStyle7} textStyle={styles.textStyle6}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton
                    isLoading={true}
                    style={styles.buttonStyle7} textStyle={styles.textStyle6}
                    onPress={() => {
            console.log('world!')
          }}>
                    Hello
                </APSLButton>
                <APSLButton disabledStyle={styles.buttonStyle8} isDisabled={true} textStyle={styles.textStyle8}>
                    Disabled
                </APSLButton>
            </View>
        )
    }
}

AppRegistry.registerComponent('Test2', ()=>MyComponent);

