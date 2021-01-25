import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  WebView,
} from 'react-native';
import DonationItem from '../components/DonateItem' ;
import HeaderNav from '../components/HeaderNav2'

export default class DonationPage extends Component {

  static navigationOptions = {
    header:  ({navigation}) => (
          <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='Donation'/>),
  };
    
    render() {
      
      return (

        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
          <View>
          <Image
            source={require('../images/Donate.jpg')}
            style={{ width:'100%',height:180,resizeMode:'cover' }}
            />

          </View>
          <ScrollView>
            <DonationItem images={require('../images/RedCross.jpg')} 
                        description='ให้บริการสาธารณประโยชน์ และความช่วยเหลือทางการแพทย์'
                        title='สภากาชาดไทย'
            />
          <DonationItem images={require('../images/MirrorFoundation.png')} 
                       description='ให้ความช่วยเหลือด้านการตามหาบุคลสูญหาย และคุ้มครองผู้ได้รับการทารุณกรรม'
                       title='มูลนิธิกระจกหมื่นบุพผา'
          />
          <DonationItem images={require('../images/AnimalFoundation.png')} 
                       description='ให้ความสงเคราะห์สัตว์เลี้ยงที่ไม่ได้รับการอุปการะคุณ'
                       title='มูลนิธิเพื่อนเพื่อสัตว์'
          />   
          <DonationItem images={require('../images/Piggy.png')} 
                       description='Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom'
                       title='The GlobalAnimal'
          />  
          <DonationItem images={require('../images/Doggy.png')} 
                       description='Lorem Ipsom Lorem Ipsom'
                       title='The Gift for Pet'
          />
          <DonationItem images={require('../images/Doggy.png')} 
                       description='Lorem Ipsom Lorem Ipsom'
                       title='The Gift for Pet'
          />
          <DonationItem images={require('../images/Doggy.png')} 
                       description='Lorem Ipsom Lorem Ipsom'
                       title='The Gift for Pet'
          />
          <DonationItem images={require('../images/Doggy.png')} 
                       description='Lorem Ipsom Lorem Ipsom'
                       title='The Gift for Pet'
          />
          <DonationItem images={require('../images/Doggy.png')} 
                       description='Lorem Ipsom Lorem Ipsom'
                       title='The Last'
          />                               
          </ScrollView>          
        </View>
      );
    }
  }
  
