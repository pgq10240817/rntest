import React, {Component} from 'react';
import {ListView, StyleSheet, Text, TouchableHighlight, TouchableOpacity,Image,Picker, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SingleGalleryEmitter from './GalleryEmitter'

const sly = StyleSheet.create({
    div:{
        marginTop:20,
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    centerFlexDirection:{
      justifyContent:'center',
    },
    centerFlexDirectionReverse:{
        alignItems:'center',
    },
    galleryDiv:{
        // borderColor:'#f00',
        // borderWidth:2,
        width:200,
        height:200,
        // borderRadius:5,
    },
    image:{
        backgroundColor:'#cc0',
        flex:1,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ccc',
    },
    galleryActionDiv:{
      // flex:1,
        marginTop:10,
        flexDirection:'row',
    },
    galleryActionText:{
        fontSize:12,
        color:'#222',
    },
    galleryActionMarginLeft:{
        marginLeft:10,
    },
    galleryActionMarginRight:{
        marginRight:10,
    },
    galleryAction:{
        width:60,
        height:30,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
    },
    imageActionDiv:{
        // flex:1,
        marginTop:20,
        // backgroundColor:'#0ff',
        flexDirection:'row',
    }
});
const IMGS = [
    'https://img12.360buyimg.com/n7/jfs/t10156/137/976262973/394768/80dd1299/59db3ddbN63154d78.jpg',
    'https://img13.360buyimg.com/n7/jfs/t7048/191/2335778116/196783/f4cb59a3/598aab2aNb26ceb41.jpg',
    'https://www.baidu.com/img/bd_logo1.png',
    ];
class YHPLGalleryComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            index:1,
            imageResize:'cover'
        };
        // SingleGalleryEmitter.addListener('pageChanged',(offset)=>{
        //     this.onPageChanged(offset);
        // });
        SingleGalleryEmitter.addListener('pageChanged',this.onPageChanged.bind(this));
        SingleGalleryEmitter.addListener('imageResize',this.onImageResizeAction.bind(this));
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
        SingleGalleryEmitter.removeAllListeners('pageChanged',this.onPageChanged);
        SingleGalleryEmitter.removeAllListeners('imageResize',this.onImageResizeAction);
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    onPageChanged(offset:int){
        // alert("page changed : "+offset);
        let count = IMGS.length;
        let newPos = offset + this.state.index;
        if (newPos >= count){
            newPos = 0;
        } else if(newPos<0){
            newPos = count - 1;
        }
        this.setState({
            index:newPos,
        });
        // SingleGalleryEmitter.removeAllListeners('pageChanged');
        // SingleGalleryEmitter.removeAllListeners('imageResize');

    }
    onImageResizeAction(type:string){
        this.setState({
            imageResize:type,
        })
    }
    render(){
        return (
            <View style={sly.galleryDiv}>
                <Image
                       source={{url: IMGS[this.state.index]}}
                       style={sly.image}
                       resizeMode={this.state.imageResize}/>
            </View>
        )
    }
}
export default class YHPLGalleryComponentTest extends Component{
    static  navigationOptions = {
        title: 'TestGallery',
    };
    constructor(props){
        super(props);
        this.state={
            index:0,
            resizeMode:'cover',
        };
        // this.onPickerValueChanged = this.onPickerValueChanged.bind(this);
    }
    render(){
        return (
            <View style={[sly.div, sly.centerFlexDirectionReverse]}>
                <YHPLGalleryComponent/>
                <View style={sly.galleryActionDiv}>
                    <TouchableOpacity style={[sly.galleryAction,sly.center,sly.galleryActionMarginRight]}
                                      onPress={()=>{this.onGalleryIndexChanged(-1)}}>
                        <Text style={sly.galleryActionText}>上一张</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[sly.galleryAction,sly.center,sly.galleryActionMarginLeft]}
                                      onPress={()=>{this.onGalleryIndexChanged(1)}}>
                        <Text style={sly.galleryActionText}>下一张</Text>
                    </TouchableOpacity>
                </View>
                {this.renderImageResizeActionButtons()}
                {this.renderPicker()}
            </View>
        )
    }
    renderImageResizeActionButton(text:string) {
        return (
            <TouchableOpacity
                key={text}
                style={[sly.galleryAction, sly.center, sly.galleryActionMarginLeft]}
                onPress={() => {
                    this.onImageAction(text)
                }}>
                <Text style={sly.galleryActionText}>{text}</Text>
            </TouchableOpacity>
        );
    }
    renderImageResizeActionButtons(){
        let size = Image.resizeMode.length;
        let actionView = [];
        for (key in Image.resizeMode){
            actionView.push(this.renderImageResizeActionButton(key));
        }
        return (
            <View style={sly.imageActionDiv}>
                {actionView}
            </View>
        )
    }
    onGalleryIndexChanged(offset) {
        // alert("offset:"+offset)
        SingleGalleryEmitter.emit("pageChanged",offset);
    }
    onImageAction(action:string){
        SingleGalleryEmitter.emit("imageResize",action);
        this.setState({
            resizeMode:action,
        })
    }
    renderPickerItemAtKey(key:string){
        return (
            <Picker.Item key={key} value={key} label={key}></Picker.Item>
        )
    }
    renderPicker(){
        let pickerView = [];
        for (key in Image.resizeMode){
            pickerView.push(this.renderPickerItemAtKey(key));
        }
        return (
            <Picker
                mode={Picker.MODE_DIALOG}
                style={{width:200,height:100}}
                selectedValue={this.state.resizeMode}
                onValueChange={(value)=>{this.onImageAction(value)}}>
                {pickerView}
            </Picker>
        )
    }
}

module.export = {YHPLGalleryComponentTest}