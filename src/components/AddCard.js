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

export default class AddCard extends Component {

    constructor(props) {
        super(props)
    }

    _onPress = () => {
    }

    render() {

        return (
            <TouchableHighlight onPress={() => { }} underlayColor={'transparent'}>
                <View style={styles.card}>
                    <Image
                        source={images['plusBTN']}
                        style={styles.imgStyle}
                    />
                    <Text style={styles.textStyle}>สร้างบัตร</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        backgroundColor: '#1288ea',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 8,
    },
    textStyle: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
    },
    imgStyle: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    }
});
