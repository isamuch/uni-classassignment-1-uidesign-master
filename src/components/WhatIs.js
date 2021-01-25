import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//Images
import images from '../index'

export default class AirpayCardPage extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.helpStyle}>
                <Text style={styles.texStyle}>
                    {this.props.txt}
                </Text>
                <Image
                    source={images['helpIcon']}
                    style={styles.imgStyle}
                />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#e8ebf0',
        // elevation: 1,
        padding: 5,
    },
    texStyle: {
        color: '#575758',
        fontSize: 15,
    },
    imgStyle: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    }
});
