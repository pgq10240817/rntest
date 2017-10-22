import React, {Component} from 'react';
import {ListView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
const Sly = StyleSheet.create({
    div:{
        flex:1,
    },
    list:{
        flex:1,
        // backgroundColor:'#ccc',
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    item:{
        height:48,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    },
    text:{
        color:'#333',
        fontSize:20,
        fontWeight:'bold',
    },
});
class DetailComponent extends Component{
    static navigationOptions = {
        title: 'Detail',
    };
    constructor(props){
        super(props);
        this.state = {
            content:props.navigation.state.params.param
        }
    };
    render(){
        return (
            <View style={[Sly.div,Sly.center]}>
                <Text
                    style={Sly.text}>content is : {this.state.content}</Text>
            </View>
        )
    }
}

export default DetailComponent;
module.export = DetailComponent;
