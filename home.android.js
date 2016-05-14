/**
 * Created by Administrator on 2016/5/9/009.
 */
import React, { Component } from 'react';
import {
    Image,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
var MOCKED_MOVIES_DATA = [
    {
        title: 'Title',
        year: '201225',
        posters: {thumbnail: 'http://ww3.sinaimg.cn/mw690/6b9a4554jw1f2jst24a2nj20ku0rsdk7.jpg'}
    },
];

const Sly = StyleSheet.create({
    div: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00',
    },
    divRight: {flex: 1, margin: 10},
    labelTitle: {fontSize: 20, textAlign: 'left', backgroundColor: '#ff0000'},
    labelYear: {fontSize: 10, textAlign: 'left', backgroundColor: '#ff00ff'},
    icon: {width: 100, height: 100},
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
})
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
class MyComponent extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        console.log('fetchData');
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        //var dataIndexAtOne = this.state.movies[0];
        //return this.renderMovie(dataIndexAtOne);
        return this.renderListView();
    };

    renderLoadingView() {
        console.log('renderLoadingView');
        return (
            <View style={Sly.container}>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }

    renderMovie(dataIndexAtOne) {
        return (
            <View style={Sly.div}>
                <Image style={Sly.icon} source={{uri: dataIndexAtOne.posters.thumbnail}}/>
                <View style={Sly.divRight}>
                    <Text style={Sly.labelTitle}>{dataIndexAtOne.title}</Text>
                    <Text style={Sly.labelYear}>{dataIndexAtOne.year}</Text>
                </View>
            </View>);

    }

    renderListView() {
        console.log('renderListView');
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={Sly.listView}
            />
        );
    }
}


AppRegistry.registerComponent('Test2', () => MyComponent);