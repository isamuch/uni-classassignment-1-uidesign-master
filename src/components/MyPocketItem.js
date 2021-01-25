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

export default class MyPocketItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <TouchableHighlight onPress={() => { }} underlayColor={'transparent'}>
                <View style={styles.card}>
                    <View style={styles.flexImg}>
                        <Image
                            style={styles.imgStyle}
                            source={images[this.props.img]}
                        />
                    </View>
                    <View style={styles.flexTxt}>
                        <Text style={styles.textStyle}>{this.props.txt}</Text>
                    </View>
                    <Image
                        style={styles.arrowStyle}
                        source={images['next']}
                    />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 3,
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 1,

    },
    flexTxt: {
        flex: 1
    },
    textStyle: {
        fontSize: 20,
    },
    flexImg: {
        width: 70,
        alignItems: 'center',
        // backgroundColor:'red'
    },
    imgStyle: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    arrowStyle: {
        marginRight: 20,
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: '#b8c3c7'
    }
});
