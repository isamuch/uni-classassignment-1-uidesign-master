import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Button,
    Image
} from 'react-native';

//Components
import HeaderMyWallet from '../components/HeaderMyWallet'
import HomeIconItem from '../components/HomeIconItem'
import GiftBar from '../components/GiftBar'
import WhatIs from '../components/WhatIs'
import ButtonComp from '../components/ButtonComp'

//Image
import images from '../index';

export default class MyWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            transparentColor: 'transparent',
            colorHeader:
                {
                    colorIcon: 'transparent',
                    colorText: 'white',
                },
            scan:
                {
                    label: 'สแกน',
                    image: 'scan'
                },
            scan:
                {
                    label: 'สแกน',
                    image: 'scan'
                },
            scan:
                {
                    label: 'สแกน',
                    image: 'scan'
                },
            scan:
                {
                    label: 'สแกน',
                    image: 'scan'
                },
        }
    }

    _onPressBack = () => {
        return this.props.navigation.pop()
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <HeaderMyWallet
                        backBtn={'true'}
                        titleHeader={'My Wallet'}
                        onPressBack={this._onPressBack}
                    />

                    <Text style={styles.txtAmount}>ยอดเงินคงเหลือ</Text>
                    <Text style={styles.amount}>O.OO</Text>
                    <View style={styles.iconStyle}>

                        <TouchableHighlight style={{ flex: 1 }} onPress={() => { }} underlayColor="transparent">
                            <HomeIconItem
                                data={{ label: 'เติมเงิน', image: 'withdraw' }}
                                color={this.state.colorHeader}
                                _underlayColor={this.state.transparentColor}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ flex: 1 }} onPress={() => { }} underlayColor="transparent">
                            <HomeIconItem
                                data={{ label: 'ถอน', image: 'deposit' }}
                                color={this.state.colorHeader}
                                _underlayColor={this.state.transparentColor}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ flex: 1 }} onPress={() => { }} underlayColor="transparent">
                            <HomeIconItem
                                data={{ label: 'โอน', image: 'tranfer' }}
                                color={this.state.colorHeader}
                                _underlayColor={this.state.transparentColor}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ flex: 1 }} onPress={() => { }} underlayColor="transparent">
                            <HomeIconItem
                                data={{ label: 'รายการ', image: 'list' }}
                                color={this.state.colorHeader}
                                _underlayColor={this.state.transparentColor}
                            />
                        </TouchableHighlight>

                    </View>
                </View>

                <GiftBar />

                <View style={styles.contentStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={images['creditcard2']}
                    />
                    <Text style={styles.titleStyle}>ไม่มีข้อมูลธนาคาร</Text>
                    <Text style={styles.txtStyle}>ผูกบัญชีธนาคาร บัตรเครดิต / เดบิตและ</Text>
                    <Text style={styles.txtStyle}>เพลิดเพลินไปกับสิทธิพิเศษกับ AirPay</Text>

                    <ButtonComp
                        txt='เพิ่มบัญชีธนาคาร'
                        width={200}
                    />
                    
                </View>

                <Text style={styles.helpStyle}>ต้องการความช่วยเหลือ <Image source={images['helpIconBlue']} style={styles.imgStyle} /></Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f8'
    },
    header: {
        backgroundColor: '#488cf1',
        alignItems: 'center',
    },
    amount: {
        color: 'white',
        fontSize: 50,
    },
    txtAmount: {
        color: '#b6d1f9',
        fontSize: 17,
        marginTop: 10,
    },
    iconStyle: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        height: 120
    },
    contentStyle: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 25,
        height: 70,
        resizeMode: 'contain'
    },
    titleStyle: {
        color: '#757779',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20,
    },
    txtStyle: {
        color: '#b5b7b8',
        fontSize: 17,
    },
    buttonStyle: {
        marginTop: 10,
        backgroundColor: '#488cf1',
        height: 50,
        width: 200
    },
    helpStyle: {
        alignSelf: 'center',
        marginBottom: 10,
        fontSize: 15,
        color: '#488cf1'
    },
    imgStyle: {
        tintColor: 'red',
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
});
