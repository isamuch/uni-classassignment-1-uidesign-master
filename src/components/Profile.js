import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

//Image
import images from '../index'

export default class Profile extends Component {

    render() {

        return (
            <TouchableHighlight onPress={() => { }} underlayColor={'rgba(0,0,0,0.1)'}>
                <View style={styles.container}>
                    <View style={styles.picFlex}>
                        <Image
                            source={images['picProfile']}
                            style={styles.imgStyle}
                        />
                    </View>
                    <View style={styles.txtFlex}>
                        <Text style={styles.nicknameStyle}>{this.props.nickname}</Text>
                        <Text style={styles.idStyle}>AirPay ID: {this.props.id}</Text>
                    </View>
                    <View style={styles.picFlex}>
                        <Image
                            source={images['qrCode']}
                            style={styles.qrStyle}
                        />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    picFlex: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: 'red'
    },
    imgStyle: {
        width: 65,
        height: 65,
        resizeMode: 'contain',
        // tintColor: 'black'
    },
    txtFlex: {
        flex: 1,
        justifyContent: 'center',
        // paddingLeft: 5,
    },
    nicknameStyle: {
        color: 'black',
        fontSize: 20,
    },
    idStyle: {
        color: '#a6a7a9',
        fontSize: 18,
    },
    qrStyle: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
});
