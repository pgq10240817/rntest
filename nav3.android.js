/**
 * Created by Administrator on 2016/5/17/017.
 */
'use strict';
import React, {Component,PropTypes} from 'react';
import {
    AppRegistry,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Navigator,
    View,
    Text
} from 'react-native';

const scenceStyles = {
    divRoot: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    divBox: {
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    label: {
        fontSize: 16,
        color: '#f00',
    },
};
let SceneCount = 1;
class SceneOne extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        title: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        if (!this.props.themeColor) {
            console.log('defdault theme color');
            //this.props.themeColor = '#B0B0B0';
        }
        if (!this.props.title) {
            //this.props.title = 'default title';
        }
        console.log('this.props.title:' + this.props.title);
        console.log('this.props.navigator:' + this.props.navigator);
    }

    _onDidLabelPressed() {
        SceneCount = SceneCount + 1;
        console.log('on label pressed:' + SceneCount);
        let {navigator} =  this.props;
        navigator.push({
            title: 'Scene:' + SceneCount,
            component: SceneOne,
            params: {
                title: 'Scene:' + SceneCount,
                themeColor: this._randomColor(),
            }
        });
    }

    _randomColor() {
        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    _renderSence() {
        let color = this.props.themeColor;
        if (!color) {
            color = '#B0B0B0';
        }
        return (
            <View style={[scenceStyles.divRoot,{backgroundColor:color}]}>
                <TouchableOpacity onPress={this._onDidLabelPressed.bind(this)}>
                    <View style={scenceStyles.divBox}>
                        <Text style={scenceStyles.label}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return this._renderSence();
    }
}

const defaultRoute = {
    component: SceneOne,
    params: {
        title: 'Scene:1',
    },
};
class MyComponent extends Component {
    _renderScene(route, navigator) {
        let Scence = route.component;
        console.log('scence is :' + Scence);
        return (
            <Scence {...route.params} navigator={navigator}/>
        )
    }

    _rednerSceneAnimation(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    _renderNavigationBar() {
        const styles = {
            title: {
                flex: 2, alignItems: 'center', justifyContent: 'center'
            },
            button: {
                flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
            },
            buttonText: {
                fontSize: 18, color: '#FFFFFF', fontWeight: '400'
            }
        }

        var routeMapper = {
            LeftButton(route, navigator, index, navState) {
                if (index > 0) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Logo</Text>
                        </TouchableOpacity>
                    );
                }
            },
            RightButton(route, navigator, index, navState) {
                if (index > 0 && route.rightButton) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Help</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Help</Text>
                        </TouchableOpacity>
                    )
                    //return null
                }

            },
            Title(route, navigator, index, navState) {
                return (
                    <View style={[styles.title,{backgroundColor:'#f00'}]}>
                        <Text style={styles.buttonText}>{route.title ? route.title : 'Home'}</Text>
                    </View>
                );
            }
        };

        return (
            <Navigator.NavigationBar
                style={{
                  alignItems: 'center',
                  backgroundColor: 'teal',
                  shadowOffset:{
                      width: 1,
                      height: 0.5,
                  },
                  shadowColor: '#55ACEE',
                  shadowOpacity: 0.8,
                  }}
                routeMapper={routeMapper}
            />
        );
    }

    _renderNav() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene}
                configureScene={this._rednerSceneAnimation}
                navigationBar={this._renderNavigationBar()}
            />
        )
    }

    render() {
        return this._renderNav();
    }
}


AppRegistry.registerComponent('Test2', ()=>MyComponent);