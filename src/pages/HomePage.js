import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    FlatList,
    ScrollView,
    Image
} from 'react-native';

//Component
import HomeIconItem from '../components/HomeIconItem';

//Navigator
import { NavigationActions } from "react-navigation";

//Swiper
// import Swiper from 'react-native-swiper';

// const Slider = props => {
//     <View style={{ height:100 }}>
//         <Image style={{ height:100 }} source={}/>    
//     </View>
// }


export default class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            grayColor: 'rgba(0,0,0,0.1)',
            transparentColor: 'transparent',
            colorHeader:
                {
                    colorIcon: 'transparent',
                    colorText: 'white',
                },
            colorBody:
                {
                    colorIcon: 'white',
                    colorText: 'rgba(0,0,0,0.5)',
                },
            scan:
                {
                    label: 'สแกน',
                    image: 'scan'
                },
            wallet:
                {
                    label: '฿ 0.00',
                    image: 'wallet'
                },
            barcode:
                {
                    label: 'ชำระเงิน',
                    image: 'barcode'
                },
            major: {
                label: 'เมเจอร์ ซีนีเพล็กซ์',
                image: 'major'
            },
            phone: {
                label: 'เติมเงินมือถือ',
                image: 'phone'
            },
            sf: {
                label: 'SF Cinema City',
                image: 'sf'
            },
            bill: {
                label: 'ชำระบิล',
                image: 'bill'
            },
            game: {
                label: 'เติมเกมส์',
                image: 'game'
            },
            card: {
                label: 'บัตรเติมเงิน',
                image: 'card'
            },
            pizza: {
                label: `The Pizza\nCompany`,
                image: 'pizza'
            },
            bank: {
                label: 'โอนเงิน',
                image: 'bank'
            },
            bus: {
                label: 'ตั๋วรถ/เรือ',
                image: 'bus'
            },
            hotel: {
                label: 'โรงแรม',
                image: 'hotel'
            },
            insurance: {
                label: 'ประกัน',
                image: 'insurance'
            },
            wognai: {
                label: 'Wongnai',
                image: 'wognai'
            },
            donate: {
                label: 'บริจาค',
                image: 'donate'
            },
            skootar: {
                label: 'Skootar',
                image: 'skootar'
            },

        }
    }

    _onPress = (page) => {
        const navigateAction = NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName: page,
            params: {},
        });
        appNavRef.dispatch(navigateAction)
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <HomeIconItem
                        data={this.state.scan}
                        color={this.state.colorHeader}
                        _underlayColor={this.state.grayColor}
                    />
                    <HomeIconItem
                        data={this.state.wallet}
                        color={this.state.colorHeader}
                        page={'MyWallet'}
                        _underlayColor={this.state.grayColor}
                    />
                    <HomeIconItem
                        data={this.state.barcode}
                        color={this.state.colorHeader}
                        _underlayColor={this.state.grayColor}
                    />
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View style={styles.rowStyle}>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.major}
                                    _underlayColor={this.state.grayColor}
                                    page={'Major'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.phone}
                                    _underlayColor={this.state.grayColor}
                                    page={'PrepaidPhoneTopUp'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.sf}
                                    _underlayColor={this.state.grayColor}
                                    page={'Sf'}
                                />
                            </View>
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.bill}
                                    _underlayColor={this.state.grayColor}
                                    page={'BillPayment'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.game}
                                    _underlayColor={this.state.grayColor}
                                    page={'Game'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.card}
                                    _underlayColor={this.state.grayColor}
                                    page={'TopUp'}
                                />
                            </View>
                        </View>

                        {/* <View style={{
                            marginTop: 13,
                            marginBottom: 15,
                            height: 100,
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >
                            <Text style={{fontSize:50}}>พื้นที่โฆษณาโว้ย</Text>
                        </View> */}

                        <View style={styles.rowStyle}>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.pizza}
                                    _underlayColor={this.state.grayColor}
                                    page={'Pizza'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.bank}
                                    _underlayColor={this.state.grayColor}
                                    page={'Transfer'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.bus}
                                    page={'BusTicket'}
                                    _underlayColor={this.state.grayColor}
                                />
                            </View>
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.hotel}
                                    _underlayColor={this.state.grayColor}
                                    page={'Hotel'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.insurance}
                                    _underlayColor={this.state.grayColor}
                                    page={'Insurance'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.wognai}
                                    _underlayColor={this.state.grayColor}
                                />
                            </View>
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.donate}
                                    _underlayColor={this.state.grayColor}
                                    page={'Donation'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                                <HomeIconItem
                                    color={this.state.colorBody}
                                    data={this.state.skootar}
                                    _underlayColor={this.state.grayColor}
                                    page={'Skootar'}
                                />
                            </View>
                            <View style={styles.itemStyle}>
                            </View>
                        </View>
                    </ScrollView>
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
    headerStyle: {
        height: 150,
        flexDirection: 'row',
        backgroundColor: '#3F7FDF',
        paddingTop: 15,
    },
    rowStyle: {
        height: 150,
        flexDirection: 'row',
        marginBottom: 1
    },
    content: {
        flex: 3,
    },
    itemStyle: {
        flex: 1,
        marginLeft: 0.8,
        marginRight: 0.8,
    }
});
