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

export default class ListItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let txtStyle = null
        if (this.props.lineButton === true) {
            txtStyle = styles.txtFlex
        } else {
            txtStyle = styles.txtFlexNoLine
        }

        return (
            <TouchableHighlight onPress={() => { }} underlayColor={'rgba(0,0,0,0.1)'}>
            <View style={styles.card}>
                <View>
                    <Image
                        source={images[this.props.icon]}
                        style={styles.imgStyle}
                    />
                </View>
                <View style={txtStyle}>
                    <Text style={styles.textStyle}>
                        {this.props.txt}
                    </Text>
                </View>
                </View>
            </TouchableHighlight>    
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgStyle: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    textStyle: {
        color: 'black',
        fontSize: 20,
    },
    txtFlex: {
        height: 50,
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e7ea',
    },
    txtFlexNoLine: {
        height: 50,
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
    }
});
