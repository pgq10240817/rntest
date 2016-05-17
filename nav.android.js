/**
 * Created by Administrator on 2016/5/17/017.
 */
const ToastExt = require('./ToastExt');
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
    Text,
    TouchableOpacity,
    //ToastAndroid,

} from 'react-native'


//import {ToastAndroid} from 'ToastExt';

const ScenceFactory = ({color,title}) => {
    const divSly = {backgroundColor: color, flex: 1, justifyContent: 'center', alignItems: 'center'};
    const labelSly = {fontSize: 16, color: 'teal', backgroundColor: 'seashell'};
    return (
        <View style={divSly}>
            <TouchableOpacity
                onPress={()=>{
                ToastExt.showShortToast('我我我');
                    //ToastAndroid.show('哈哈',1);
                }}>
                <Text style={labelSly}>{title}</Text>
            </TouchableOpacity>
        </View>
    )

}
class NavComponet extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return this.renderNav();
    }

    renderNav() {
        return (
            <Navigator
                initialRoute={{name: 'My First Scene', index: 0}}
                renderScene={(route, navigator) =>
              <ScenceFactory
                color="whitesmoke"
                title="scence1">
              </ScenceFactory>
            }
            />
        )
    }
}

AppRegistry.registerComponent('Test2', ()=>NavComponet);