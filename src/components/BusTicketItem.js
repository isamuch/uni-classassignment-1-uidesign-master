import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    
} from 'react-native';

export default class BusTicketItem extends Component {


    render() {

        return (
            <View style={[styles.container, {alignItems:this.props.position}]}>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                <Text style={styles.txtStyle}>{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dce2e5',
        paddingBottom: 10,
    },
    helpStyle: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#488cf1'
    },
    titleStyle: {
        fontSize: 16,
        color: '#999999'
    },
    txtStyle: {
        color: '#666666',
        fontSize: 18,
        marginTop: 15,
    }
});
