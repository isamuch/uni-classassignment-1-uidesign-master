import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Image
} from 'react-native';

//Images
import images from '../index'

export default class MyWallet extends Component {

    render() {

        return (
            <TouchableHighlight onPress={() => { }}>
                <View style={styles.container}>
                    <Image style={styles.giftIconStyle} source={images['gift']} />
                    <Text style={styles.txtStyle}>รับของขวัญสุดพิเศษจาก AirPay!</Text>
                    <Image style={styles.nextIconStyle} source={images['next']} />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fef4cd'
    },
    giftIconStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        margin: 20,
    },
    nextIconStyle: {
        width: 13,
        height: 13,
        resizeMode: 'contain',
        margin: 20,
        tintColor: '#976f17'
    },
    txtStyle: {
        flex: 1,
        fontSize: 16,
        color: '#976f17'
    }
});
