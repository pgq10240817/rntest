/**
 * Created by admin360buyad on 2016/6/20/020.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Util from '../util/utils';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = {
    divRoot: {
        width: Util.size.width,
        flex: 1,
    },
    divLogo: {
        position: 'absolute',
        width: Util.size.width,
        height: 100,
        top: 50,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoLabel: {
        color: '#fff',
        textAlign: "left",
        fontSize: 30,
        fontWeight: "700",
        marginLeft: 10,
    },
    divContent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'teal',
    },
    divSwiper: {
        width: Util.size.width,
    },
    divPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    divBottom: {
        height: 50,
        bottom: 0,
        backgroundColor: 'teal',
        flexDirection: 'row',
    },
    touchBottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelBottom: {
        fontSize: 14,
        color: 'white',
    },
    labelPageTitle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700"
    },
    labelPageDetail: {
        marginLeft: 10,
        marginRight: 10,
        color: "#fff",
        textAlign: "center"
    },

}
class SpotifyComponent extends Component {

    _rednerBottom() {
        return (
            <View style={styles.divBottom}>
                <TouchableOpacity
                    style={[styles.touchBottom,{backgroundColor:"#201437"}]}><Text
                    style={styles.labelBottom}>{'LOG IN'}</Text></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchBottom,{backgroundColor:"#29b859"}]}><Text
                    style={styles.labelBottom}>{'SIGN UP'}</Text></TouchableOpacity>
            </View>
        )
    }

    _page(title:String, detail:String) {
        return (
            <View style={styles.divPage}>
                <Text style={styles.labelPageTitle}>{title}</Text>
                <Text style={styles.labelPageDetail}>{detail}</Text>
            </View>
        )
    }


    _renderSwipe() {
        return (
            <View style={styles.divSwiper}>
                <Swiper
                    index={0}
                    height={Util.size.height - 50 - 25}
                    paginationStyle={[{bottom:20}]}>
                    {this._page('Welcome', 'Sign up for free music on your phone,tablet and computer.')}
                    {this._page('Browse', 'Explore top tracks, new releases and the right playlist for every moment')}
                    {this._page('Search', 'Looking for that special album or artist? Just search and hit play!')}
                    {this._page('Running', 'Music that perfectly matches your tempo.')}
                    {this._page('Your Library', 'Save any song,album or artist to your own music collection.')}
                </Swiper>
            </View>
        )
    }

    _renderLogo() {
        return (
            <View style={styles.divLogo}>
                <Icon name="spotify" size={60} color="white"></Icon>
                <Text style={styles.logoLabel}>{'Spotify'}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.divRoot}>
                <View style={styles.divContent}>
                    {this._renderSwipe()}
                    {this._rednerBottom()}
                </View>
                {this._renderLogo()}
            </View>
        )
    }
}
export default SpotifyComponent;
module.exports = SpotifyComponent;