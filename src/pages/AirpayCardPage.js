import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


//Component
import HeaderNav from '../components/HeaderNav'
import AddCard from '../components/AddCard'
import WhatIs from '../components/WhatIs'


export default class AirpayCardPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderNav
                    backBtn={false}
                    titleHeader={'AirPay Card'}
                />    
                <AddCard /> 
                <WhatIs
                    txt={' อะไรคือ "AirPay Card" '}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f8'
    }
});
