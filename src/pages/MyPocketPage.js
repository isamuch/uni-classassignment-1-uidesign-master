import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

//Components
import MyPockectItem from '../components/MyPocketItem';
import HeaderNav from '../components/HeaderNav';


export default class MyPocketPage extends Component {

    constructor(props) {
        super(props)
    }

    _onPress = () => {
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderNav
                    titleHeader={'My Pocket'}
                    backBtn={false}
                />
                <ScrollView style={{ flex: 1 }}>
                    <MyPockectItem
                        txt={'ของขวัญต้อนรับ'}
                        img={'giftIcon'}
                    />
                    <MyPockectItem
                        txt={'ตั๋วของฉัน'}
                        img={'ticketIcon'}
                    />
                    <MyPockectItem
                        txt={'คูปอง'}
                        img={'cupongIcon'}
                    />
                </ScrollView>
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
