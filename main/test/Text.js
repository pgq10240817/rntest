import React, {Component} from 'react';
import {ListView, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
const sly = StyleSheet.create({
    div:{
      flex:1,
    },
    searchDiv:{
        margin:5,
        flexDirection:'row',
        height:40,

    },
    searchTxt:{
        borderColor:'#ccc',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        flex:1,
        padding:10,
        color:'#333',
        // placeholderTextColor:'#999',
    },
    searchAction:{
        marginLeft:0,
        width:60,
        backgroundColor:'#999',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderColor:'#ccc',
    },
    searchActionText:{
        color:'#fff',
    },

    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    centerAtDirection:{
        justifyContent:'center',
    },
    searchSuggestionListView:{
        flex:1,
        backgroundColor:'#ccc',
    },
    searchSuggestionItem:{
        borderWidth:1,
        borderColor:'#ccc',
        height:40,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#ddd',
    },
    searchSuggestionText:{
        color:'#666',
    }

});
const Data = [{title:"1"},{title:"2"},{title:"3"}];
class YHPLTextInputComponent extends Component{
    static navigationOptions = {
        title: 'TestText',
    };
    constructor(props){
        super(props);
        this.state = ({
            keyword:'',
            suggestionEnable:false,
            suggestionList:[],
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }).cloneWithRows([]),
        });
        this._onSearchAction = this.onSearchAction.bind(this);
        this.bindSearchSuggestionData = this.bindSearchSuggestionData.bind(this)
    }
    renderSearchHolder(keyword:string){
        return (
            <View style={sly.searchDiv}>
                <TextInput
                    placeholderTextColor='#999'
                    placeholder='搜索'
                    value={keyword}
                    clearButtonMode='always'
                    onChangeText={(text)=>{this.onTextInputChanged(text)}}
                    style={sly.searchTxt}/>
                <TouchableHighlight
                    onPress={(text)=>{this.onSearchAction(text)}}
                    underlayColor='#00000010'
                    style={[sly.searchAction, sly.center]}>
                    <Text style={sly.searchActionText}>搜索</Text>
                </TouchableHighlight>
            </View>
        );
    }
    onSearchAction(){
        alert('click');
    }
    onTextInputChanged(content:string){
        // alert('new text:'+content);
        this.setState({
            keyword:content,
            suggestionEnable:true,
            dataSource: this.state.dataSource.cloneWithRows(this.getSearchSuggestionAtKeyword(content)),
        })
    }
    getSearchSuggestionAtKeyword(keyword:string){
        let size = Math.round(Math.random() * 10)+1;
        let ret = [];
        for (let index = 0; index < size; index++){
            ret.push({title:keyword+index});
        }
        return ret;
    }
    renderSearchSuggestion(keyword:string){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.bindSearchSuggestionData}
                style={sly.searchSuggestionListView}
            />
        );
    }
    bindSearchSuggestionData(bean){
        return (
            <TouchableHighlight
                onPress={()=>{this.onItemClickAtSuggestion(bean.title)}}
                underlayColor='#0f0'
                style={[sly.searchSuggestionItem,sly.centerAtDirection]}>
                <Text style={[sly.searchSuggestionText]}>{bean.title}</Text>
            </TouchableHighlight>
        );
    }
    onItemClickAtSuggestion(keyword:string){
        this.setState({
            keyword:keyword,
            suggestionEnable:false,
        })
    }
    render(){
        let searchSuggestion = this.state.keyword.length > 0;
        // alert(searchSuggestion);
        return(
            <View style={sly.div}>
                {this.renderSearchHolder(this.state.keyword)}
                {this.state.suggestionEnable&&searchSuggestion?this.renderSearchSuggestion(this.state.keyword):null}
            </View>

        )
      };
}
export default YHPLTextInputComponent;
module.export = {YHPLTextInputComponent};

