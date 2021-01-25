import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//Pages
import HomePage from './src/pages/HomePage'
import MyPocketPage from './src/pages/MyPocketPage'
import AirpayCardPage from './src/pages/AirpayCardPage'
import MePage from './src/pages/MePage'
import MyWalletPage from './src/pages/MyWalletPage'
import BusTicketPage from './src/pages/BusTicketPage'
import BillPaymentPage from './src/pages/BillPaymentPage'
import GamePage from './src/pages/GamePage'
import MajorPage from './src/pages/MajorPage'
import PrepaidPhoneTopUpPage from './src/pages/PrepaidPhoneTopUpPage'
import SfPage from './src/pages/SfPage'
import TopUpPage from './src/pages/TopUpPage'
import PizzaPage from './src/pages/PizzaPage'
import TransferPage from './src/pages/TransferPage'
import HotelPage from './src/pages/HotelPage'
import InsurancePage from './src/pages/InsurancePage'
import DonationPage from './src/pages/DanationPage'
import SkootarPage from './src/pages/SkootarPage'
import WebViewPage from './src/pages/WebViewPage'

//Image
import images from './src/index'

//Navigator
import { TabNavigator, StackNavigator } from 'react-navigation'

//TabNavigator
const TabBarNavigator = TabNavigator({
  'หน้าแรก': { screen: HomePage },
  'My Pocket': { screen: MyPocketPage },
  'AirPay Card': { screen: AirpayCardPage },
  'Me': { screen: MePage }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let nameImage;
        if (routeName === 'หน้าแรก') {
          nameImage = 'airpay'
        } else if (routeName === 'My Pocket') {
          nameImage = 'pocket'
        } else if (routeName === 'AirPay Card') {
          nameImage = 'creditcard'
        } else if (routeName === 'Me') {
          nameImage = 'me'
        }

        return <Image style={{ width: 25, height: 25 }} source={images[nameImage]} tintColor={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2c9bf7',
      inactiveTintColor: '#929292',
      style: {
        backgroundColor: 'white'
      },
      labelStyle: {
        width: 100,
        fontSize: 15
      },
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      tabStyle: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
      },
      showIcon: true
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,

  })

class Tabbar extends Component {
  render() {
    return <TabBarNavigator />
  }
}


//================================================================================
//StackNavigator
const HomeStack = StackNavigator(
  {
    Tabbar: { screen: Tabbar },
    MyWallet: { screen: MyWalletPage },
    BusTicket: { screen: BusTicketPage },
    BillPayment: { screen: BillPaymentPage },
    Game: { screen: GamePage },
    Major: { screen: MajorPage },
    PrepaidPhoneTopUp: { screen: PrepaidPhoneTopUpPage },
    TopUp: { screen: TopUpPage },
    Sf: { screen: SfPage },
    Pizza: { screen: PizzaPage },
    Transfer: { screen: TransferPage },
    Hotel: { screen: HotelPage },
    Insurance: { screen: InsurancePage },
    Donation: { screen: DonationPage },
    Skootar: { screen: SkootarPage },
    WebView: { screen: WebViewPage },
  },
  {
    navigationOptions: { header: null }
  }
)

export default class Home extends Component {
  render() {
    return (
      <HomeStack
        ref={navigatorRef => { appNavRef = navigatorRef }}
      />)
  }
}
//================================================================================