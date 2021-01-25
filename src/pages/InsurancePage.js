import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  
} from 'react-native';
import HeaderNav from '../components/HeaderNav2'
import WebViewPage from '../components/HeaderNav2'

export default class InsurancePage extends Component {

  static navigationOptions = {
    header:  ({navigation}) => (
          <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='Insurance'/>),
  };

    
    render() {
      const {navigate} = this.props.navigation

      return (
        <View style={{paddingTop:7}}> 

        <TouchableHighlight  underlayColor='transparent' 
        onPress={ ()=> alert('Hlooee')  }>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:15,
                    paddingLeft:10,
                    paddingRight:10}}>
            <Image
            source={require('../images/MSIG.png')}
            style={{width:50,height:50,resizeMode:'contain' }}
            />
          </View>
          <View style={{flex:85,flexDirection:'column'}}>
            <Text
            style={{fontSize:15,color:'black'}}
            >MSIG ประกันภัยการเดินทาง</Text>
            <Text>การเดินทางต่างประเทศจะเป็นเรื่องที่ไร้กังวลใจสำหรับคุณ</Text>
          </View>
        </View>
        </TouchableHighlight>
        </View>
      );
    }
  }