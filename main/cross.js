import React, {Component} from 'react';
import {ListView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import YHPLTextInputComponent from './test/Text'
import DetailComponent from  './test/Detail'
import YHPLGalleryComponentTest from './test/Image'

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
// const Date = [{title:"1"},{title:"222"}];
const Date = [
    {title:"TestText", navigation: 'TestText',},
    {title:'TestGallery', navigation:'TestGallery',},
    {title:"Detail", navigation: 'Detail',},
];



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
        // return (
        //     <View/>
        // )
        return this.renderListView();
    }
    renderListView(){
        console.log('renderListView:'+this);
        return (
            <View style={Sly.div}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._bindData}
                style={Sly.list}
            />
            </View>
        );
    }
    navifationToComponent(screenName:string,content:string){
        // alert(content);
        // const { navigate } = this.props.navigation;
        this.props.navigation.navigate(screenName,{param:content});
    }
    bindData(bean) {
        console.log('bindData:'+bean);
        return (
            <TouchableHighlight style={[Sly.item, Sly.center]}
                                underlayColor='#00000010'
                                onPress={()=>{this.navifationToComponent(bean.navigation, bean.title)}}>
                <Text
                    style={Sly.text}>{bean.title}</Text>
            </TouchableHighlight>
        )
    }

}
const StackNavigatorDecorator = StackNavigator({
    Main: { screen: MainComponnet },
    Detail:{screen:DetailComponent},
    TestText: {screen:YHPLTextInputComponent},
    TestGallery : {screen: YHPLGalleryComponentTest},
});


export default class CrossComponent extends Component{
    render(){
        return (
            <StackNavigatorDecorator style={{backgroundColor:'#cccccc'}}/>
        )
    }
}