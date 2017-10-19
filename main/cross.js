import React, {Component} from 'react';
import {ListView, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
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
const Date = [{title:"1"},{title:"222"}];


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

class MainComponnet extends Component{
    static navigationOptions = {
        title: '首页'
    };
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }).cloneWithRows(Date),
            loaded: false,
            // context:this,
        };
        this._bindData = this.bindData.bind(this);
        // this.showDialog = this.showDialog.bind(this);
        // this._showDialog = this._showDialog.bind(this);
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    render(){
        return this.renderListView();
    }
    renderListView(){
        console.log('renderListView:'+this);
        return (
            <View style={Sly.div}>
                <Text
                    onPress={()=>{this._showDialog('222')}}
                    style={Sly.text}>111111</Text>

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._bindData}
                style={Sly.list}
            />
            </View>
        );
    }
    showDialog(content:string){
        // alert(content);
        // const { navigate } = this.props.navigation;
        this.props.navigation.navigate('Detail',{param:'2222'});
    }
    bindData(bean) {
        console.log('bindData:'+bean);
        return (
            <TouchableHighlight style={[Sly.item, Sly.center]}
                                underlayColor='#00000010'
                                onPress={()=>{this.showDialog(bean.title)}}>
                <Text
                    style={Sly.text}>{bean.title}</Text>
            </TouchableHighlight>
        )
    }

}
const StackNavigatorDecorator = StackNavigator({
    Main: { screen: MainComponnet },
    Detail:{screen:DetailComponent}
});


export default class CrossComponent extends Component{
    render(){
        return (
            <StackNavigatorDecorator style={{backgroundColor:'#cccccc'}}/>
        )
    }
}