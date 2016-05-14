/**
 * Created by Administrator on 2016/5/14/014.
 */
import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native'

class CountComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        setInterval(() => {
                console.log('componentDidMount : count :' + this.state.count);
                this.setState({count: this.state.count + 1})
            },
            1000
        )
    }

    render() {
        return this.renderCountLabel();
    }

    renderCountLabel() {
        const {count} = this.state
        const {color, size} = this.props
        const style = {
            fontSize: size,
            color,
        }
        return (
            <Text
                style={style}>
                {count}
            </Text>
        );
    }
}
const App = () => {
    const style = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <View
            style={style}>
            <CountComponet
                color={'teal'}
                size={32}/>
        </View>
    )
}

AppRegistry.registerComponent('Test2', () => App);