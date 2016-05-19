/**
 * Created by Administrator on 2016/5/17/017.
 */
'use strict';
import React , {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

const SceneStyles = {
    divRoot: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',

    },
    divBox: {
        backgroundColor: 'teal',
        padding: 10,
    },
    label: {
        fontSize: 18,
        color: '#222',
    },
}
let SceneCount = 1;
class Scene extends Component {
    static propTypes = {
        sceneColor: React.PropTypes.string,
        title: React.PropTypes.string,
    }

    _randomColor() {
        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        return 'rgb(' + r + ',' + g + ',' + b + ')';

    }


    _onDidLabelPressed() {
        SceneCount = SceneCount + 1;
        this.props.navigator.push({
            title: 'Scene:' + SceneCount,
            component: Scene,
            params: {
                title: 'Scene:' + SceneCount,
            }
        });
    }

    _renderScene() {
        let sceneColor = this.props.sceneColor;
        if(!sceneColor){
            sceneColor = this._randomColor();
        }
        return (
            <View style={[SceneStyles.divRoot,{backgroundColor:sceneColor}]}>
                <TouchableOpacity onPress={this._onDidLabelPressed.bind(this)}>
                    <View style={SceneStyles.divBox}>
                        <Text style={SceneStyles.label}>{this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    render() {
        return this._renderScene();
    }

}


class SampleApp extends Component {


    _renderScene(route, navigator) {

        let SceneImpl = route.component;
        return (
            <SceneImpl {...route.params} navigator={navigator}>
            </SceneImpl>
        )
    }

    _getNavigationBar() {
        const NavBarStyles = {
            button: {
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                width: 50,
            },
            title: {
                flex: 1,
                alignItems:'flex-end',
                justifyContent:'center',
            },
            label: {
                fontSize: 18,
                color: '#eee',
            },
        }
        var routeMapper = {
            LeftButton(route, navigator, index, navState) {
                if (index > 0) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={NavBarStyles.button}>
                            <Text style={NavBarStyles.label}>Back</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={NavBarStyles.button}>
                            <Text style={NavBarStyles.label}>Logo</Text>
                        </TouchableOpacity>
                    );
                }
            },
            RightButton(route, navigator, index, navState) {
                if (index > 0 && route.rightButton) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={NavBarStyles.button}>
                            <Text style={NavBarStyles.lebel}>Help</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={NavBarStyles.button}>
                            <Text style={NavBarStyles.label}>Help</Text>
                        </TouchableOpacity>
                    )
                    //return null
                }

            },
            Title(route, navigator, index, navState) {
                return (
                    <View style={[NavBarStyles.title,{backgroundColor:'#f00'}]}>
                        <Text style={NavBarStyles.label}>{route.title ? route.title : 'Home'}</Text>
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

    _renderNavigator() {
        const defaultRout = {
            title: 'home',
            component: Scene,
            params: {
                title: 'home',
            }
        };
        return (
            <Navigator
                initialRoute={defaultRout}
                renderScene={this._renderScene}
                navigationBar={this._getNavigationBar()}
            >
            </Navigator>

        )
    }

    render() {
        return this._renderNavigator();
    }
}

AppRegistry.registerComponent('Test2', ()=>SampleApp);