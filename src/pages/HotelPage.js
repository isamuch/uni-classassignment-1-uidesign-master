import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Button, View } from 'native-base';
import DatePicker from 'react-native-datepicker'
import HotelItem from '../components/HotelItem'
import HotelContent from '../components/HotelContent'
import HeaderNav from '../components/HeaderNav2'


export default class HotelPage extends Component {

  static navigationOptions = {
    header: ({ navigation }) => (
      <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='Hotel | Cheap Hotels Bookings Disco...' />),
  };

  render() {


    return (
      <View style={{
        borderRadius: .7,
        borderWidth: 2.7,
        borderColor: '#7DFDFE',
        margin: 7
      }}>
        <View style={{ backgroundColor: '#7DFDFE', }}>
          <Text style={{ color: 'white', padding: 5, fontWeight: 'bold', fontSize: 15 }}>ค้นหาโรงแรม</Text>
        </View>

        <HotelItem />


      </View>

    );
  }
}