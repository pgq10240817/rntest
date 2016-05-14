/**
 * Created by Administrator on 2016/5/14/014.
 */
import React, { Component } from 'react';
import { AppRegistry,StyleSheet, View, Text, TouchableOpacity, } from 'react-native'

const ToggleStyles = StyleSheet.create({
    div: {
        flex: 0,
        flexDirection: 'column',
        paddingBottom: 20,
    },
    divToggle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#483D8B',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    toggleTitle: {
        fontSize: 14,
        backgroundColor: '#B9D3EE',
    },
    toggle: {
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B9D3EE',
    },
    toggleHightLight: {
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C0FF3E',
    },
    toggleLabel: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        fontSize: 12,
        color: '#ff0000',
        textAlign: 'center',
    },

});
const ToggleFactory = ({styles,toggleTitle, options,highLightValue, onClick}) => {
    return (
        <View style={styles.div}>
            <Text style={styles.toggleTitle}>{toggleTitle}</Text>
            <View style={styles.divToggle}>
                {
                    options.map((option) => {
                        const divSly = option === highLightValue ? styles.toggleHightLight : styles.toggle;
                        return (
                            <TouchableOpacity style={divSly}
                                              onPress={() => onClick(option)}>
                                <Text style={styles.toggleLabel}>{option}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        </View>
    );
};
class ToggleComponet extends Component {


    render() {
        return (
            <View style={styles.div}>
                <Text style={styles.toggleTitle}>标题哟</Text>
                <View style={styles.divToggle}>
                    <TouchableOpacity style={styles.toggle}>
                        <Text style={styles.toggleLabel}>1111</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggle}>
                        <Text style={styles.toggleLabel}>2222</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggle}>
                        <Text style={styles.toggleLabel}>3333</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggle}>
                        <Text style={styles.toggleLabel}>4444</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    componentWillReceiveProps(props) {
        console.log('componentWillMount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate,nextProps:' + nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate,nextProps:' + prevProps);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    //constructor(props) {
    //    super(props)
    //    this.state = {
    //        flexDirection: 'row',
    //        justifyContent: 'flex-start',
    //        alignItems: 'flex-start',
    //    }
    //}


    render() {
        console.log('render');
        const {flexDirection, alignItems, justifyContent} = this.state
        const MainSly = {
            divRoot: {
                flex: 1,
            },
            divBox: {
                flex: 2,
                flexDirection,
                justifyContent,
                alignItems,
            },
            box: {
                backgroundColor: '#0000FF',
                margin: 10,
                padding: 20,
                borderWidth: 2,
                borderColor: '#ff0000',
                borderRadius: 5,
                opacity: 0.8,
            },
        };

        return (
            <View style={MainSly.divRoot}>
                <ToggleFactory
                    styles={ToggleStyles}
                    toggleTitle={'Primary Axis'}
                    options={['column', 'row']}
                    highLightValue={flexDirection}
                    onClick={(option) => this.setState({flexDirection: option})}
                />
                <ToggleFactory
                    styles={ToggleStyles}
                    toggleTitle={'JustifyContent | Primary Axis Direction'}
                    options={['flex-start', 'center', 'flex-end', 'space-around','space-between']}
                    highLightValue={justifyContent}
                    onClick={(option) => this.setState({justifyContent: option})}
                />
                <ToggleFactory
                    styles={ToggleStyles}
                    toggleTitle={'alignItems | Other  Axis Direction'}
                    options={['flex-start', 'center', 'flex-end', 'stretch']}
                    highLightValue={alignItems}
                    onClick={(option) => this.setState({alignItems: option})}
                />
                <View style={MainSly.divBox}>
                    <View style={MainSly.box}/>
                    <View style={MainSly.box}/>
                    <View style={MainSly.box}/>
                </View>
            </View>
        )
    }
}


AppRegistry.registerComponent('Test2', () => MainComponent);