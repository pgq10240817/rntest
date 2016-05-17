/**
 * Created by Administrator on 2016/5/17/017.
 */
'use strict';
import React , {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';


const styles = {
    button: {
        height: 44,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        alignSelf: 'center',
    },
    spinner: {
        alignSelf: 'center',
    },
    opacity: {
        opacity: 0.5,
    },
}
class APSLButton extends Component {
    static isAndroid = Platform.OS === 'android';
    static propTypes = {
        textStyle: Text.propTypes.style,
        disabledStyle: Text.propTypes.style,
        children: PropTypes.string.isRequired,
        isLoading: PropTypes.bool,
        isDisabled: PropTypes.bool,
        activityIndicatorColor: PropTypes.string,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
    };

    _renderInnerTextAndroid() {
        if (this.props.isLoading) {
            return (
                <ProgressBarAndroid
                    style={[{
                    height: 20,
          }, styles.spinner]}
                    styleAttr='Inverse'
                    color={this.props.activityIndicatorColor || 'black'}
                />
            );
        }
        return (
            <Text style={[styles.textButton, this.props.textStyle]}>
                {this.props.children}
            </Text>
        );
    }

    _renderInnerTextiOS() {
        if (this.props.isLoading) {
            return (
                <ActivityIndicatorIOS
                    animating={true}
                    size='small'
                    style={styles.spinner}
                    color={this.props.activityIndicatorColor || 'black'}
                />
            );
        }
        return (
            <Text style={[styles.textButton, this.props.textStyle]}>
                {this.props.children}
            </Text>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!isEqual(nextProps, this.props)) {
            return true;
        }
        return false;
    }

    _renderInnerText() {
        if (APSLButton.isAndroid) {
            return this._renderInnerTextAndroid()
        }
        return this._renderInnerTextiOS()
    }

    render() {
        if (this.props.isDisabled === true || this.props.isLoading === true) {
            return (
                <View style={[styles.button, this.props.style, (this.props.disabledStyle || styles.opacity)]}>
                    {this._renderInnerText()}
                </View>
            );
        } else {
            // Extract Touchable props
            const touchableProps = {
                onPress: this.props.onPress,
                onPressIn: this.props.onPressIn,
                onPressOut: this.props.onPressOut,
                onLongPress: this.props.onLongPress
            };
            if (APSLButton.isAndroid) {
                const touchablePropsAndroid = Object.assign(touchableProps, {
                    background: this.props.background || TouchableNativeFeedback.SelectableBackground()
                });
                return (
                    <TouchableNativeFeedback {...touchablePropsAndroid}>
                        <Text style={[styles.button, this.props.style]}>
                            {this._renderInnerTextAndroid()}
                        </Text>
                    </TouchableNativeFeedback>
                )
            } else {
                return (
                    <TouchableOpacity {...touchableProps}
                        style={[styles.button, this.props.style]}>
                        {this._renderInnerTextiOS()}
                    </TouchableOpacity>
                );
            }
        }
    }


}

module.exports = APSLButton;