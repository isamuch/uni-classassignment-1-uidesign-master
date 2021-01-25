import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import TransferItem from '../components/TransferItem';
import HeaderNav from '../components/HeaderNav2'


export default class TransferPage extends Component {

  static navigationOptions = {
    header:  ({navigation}) => (
          <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='Tranfer'/>),
  };
      
    render() {
      const {navigate} = this.props.navigation

      return (
        <ScrollView>
          <TransferItem  onPress={()=>navigate('WebView',{link:'https://www.facebook.com/'})}  
           selection=" ไปยังสมุดรายชื่อ " images={require('../images/Contact2.png')}/>
          <TransferItem onPress={()=>navigate('WebView',{link:'https://manager.airpay.co.th/login/?next=/home/'})}
          selection=" โอนให้บัญชี AirPay " images={require('../images/AirPay2.png')}/>
          <TransferItem onPress={()=>navigate('WebView',{link:'https://www.ktbnetbank.com/consumer/'})}
          selection=" ไปยังบัญชีธนาคาร " images={require('../images/CreditCard2.png')}/>
        </ScrollView>
      );
    }
  }
  

  