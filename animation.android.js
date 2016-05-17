/**
 * Created by Administrator on 2016/5/16/016.
 */
import React , {Component} from 'react';
import {AppRegistry,StyleSheet,View,Text,Image , TouchableOpacity,Animated} from 'react-native';

const Sly = StyleSheet.create({
    div: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavender',
    },
    icon: {
        width: 100,
        height: 100,
        backgroundColor: 'teal',
    },

});
const Pannel = ({label, options,onClick}) => {
    const divSly = {flex: 0, flexDirection: 'column', margin: 10};
    const optionDiv = {flexDirection: 'row'};
    const optionTouchSly = {
        backgroundColor: 'lightgreen',
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    };
    const optionSly = {fontSize: 12, color: '#ff0000', textAlign: 'center'};
    return (
        <View style={divSly}>
            <Text>{label}</Text>
            <View style={optionDiv}>
                {
                    options.map((option) => {
                        return (
                            <TouchableOpacity style={optionTouchSly}
                                              onPress={() => onClick(option) }>
                                <Text style={optionSly}>{option}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
};
class AnimationComonet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
            animationType: 'scale',
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();
    }

    startAnimation() {
        //const {animationType,bounceValue} = this.state;
        //console.log('animationType:' + animationType);
        Animated.spring(
            1.5,
            {
                toValue: 0.8,
                friction: 1,
            }
        ).start();

    }

    render() {

        return (
            <View>
                <Pannel
                    label={'Primary Axis'}
                    options={['translate', 'scale','rotate','skew']}
                    onClick={(option)=>{
                    console.log('option:' +option );
                    this.setState({bounceValue:1.5});
                    }}
                />
                <View style={Sly.div}>
                    <Animated.Image style={{
                    width: 100,
                    height: 100,
                    transform: [{scale: this.state.bounceValue}],
                      }}
                                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}>

                    </Animated.Image>
                </View>
            </View>
        )

    }

}
AppRegistry.registerComponent('Test2', () => AnimationComonet);