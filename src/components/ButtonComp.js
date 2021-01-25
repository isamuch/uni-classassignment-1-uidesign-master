import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';


export default class MyWallet extends Component {


    render() {

        return (
            <TouchableHighlight onPress={() => { }} underlayColor="transparent">
                <View style={[styles.buttonStyle, {width:this.props.width}]}>
                    <Text style={styles.txtButtonStyle}>{this.props.txt}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 15,
        backgroundColor: '#488cf1',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtButtonStyle: {
        color: 'white',
        fontSize: 22,
    }
});
