/**
 * Created by Administrator on 2016/6/3/003.
 */
import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ViewPagerAndroid,
} from 'react-native';
import DisplayUtil from '../../../common/util/DisplayUtil'
const styles = {
    divRoot: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        alignSelf: 'stretch',
    },
    divViewPager: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    divTabs: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    divTab: {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divTabNormal: {
        backgroundColor: '#eee',
    },
    divTabHighLight: {
        backgroundColor: '#bbb',
    },

    divPage: {
        backgroundColor: '#ff0',
        alignItems: 'center',
        padding: 20,
    }
}
const BGCOLOR = ['#ff0', '#333', '#555', '#f00', '#888'];
class MainFrameComponent extends Component {
    _getPages() {
        return this.state.pages.map((page, index)=> {
            return (
                <View key={index} style={styles.divPage} collapsable={false}>
                    <Text>{'index=' + index}</Text>
                </View>
            )
        })
    }

    _getTabs() {
        let postion = this.state.page;
        return this.state.pages.map((page, index)=> {
            let isHighLight = postion == index;
            return (
                <TouchableOpacity
                    key={index}
                    onPress={()=>{
                    this._onTabClicked(index);
                    }}
                    style={[styles.divTab,isHighLight?styles.divTabHighLight:styles.divTabNormal]}>
                    <Text>{page.title}</Text>
                </TouchableOpacity>)
        })
    }

    _onPageSelected = (e)=> {
        this.setState({page: e.nativeEvent.position});
    }
    _onTabClicked = (postion)=> {
        this.setState({page: postion});
        this.viewPager.setPage(postion);
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page: 0,
            pages: [{'title': 'page1'}, {'title': 'page2'}, {'title': 'page3'}, {'title': 'page4'}],
        }
    }

    render() {
        console.log('page is :' + this.state.page);
        return (
            <View style={styles.divRoot}>
                <ViewPagerAndroid
                    ref={viewPager => { this.viewPager = viewPager; }}
                    onPageSelected={this._onPageSelected}
                    style={styles.divViewPager}
                    initialPage={this.state.page}>
                    {this._getPages()}
                </ViewPagerAndroid>
                <View style={styles.divTabs}>
                    {this._getTabs()}
                </View>
            </View>
        )
    }
}

export
default
MainFrameComponent;
module
    .
    exports = MainFrameComponent;
