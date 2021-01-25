import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

//Component
import HeaderNav from '../components/HeaderNav'
import Profile from '../components/Profile'
import ListItem from '../components/ListItem'

export default class MePage extends Component {

    constructor(props) {
        super(props)
    }

    _onPress = () => {
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderNav
                    backBtn={false}
                    titleHeader={'Me'}
                />
                <Profile
                    nickname={'Samuch'}
                    id={'14.much'}
                />
                <View style={styles.listStyle}>
                    <ListItem
                        txt={'ประวัติการทำรายการ'}
                        icon={'historyIcon'}
                        lineButton={true}
                    />
                    <ListItem
                        txt={'บิลของฉัน'}
                        icon={'billIcon'}
                        lineButton={false}
                    />
                </View>

                <View style={styles.listStyle}>
                    <ListItem
                        txt={'ความปลอดภัยของบัญชี'}
                        icon={'securityIcon'}
                        lineButton={true}
                    />
                    <ListItem
                        txt={'ตั้งค่า'}
                        icon={'settingIcon'}
                        lineButton={true}
                    />
                    <ListItem
                        txt={'เกี่ยวกับ AirPay'}
                        icon={'aboutIcon'}
                        lineButton={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f8'
    },
    listStyle: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e7ea',
        borderTopWidth: 1,
        borderTopColor: '#e1e7ea',
    }
});
