import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import PizzaItem from '../components/PizzaItem'
import HeaderNav from '../components/HeaderNav2'


export default class PizzaPage extends Component {

  static navigationOptions = {
    header:  ({navigation}) => (
          <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='The Pizza Company'/>),
  };
    
    render() {


      return (
        <View style={{flex:1}}>
          <View>
            <Image
            source={require('../images/PizzaMain.png')}
            style={{ width:'100%',height:180,resizeMode:'cover' }}
            />
          </View> 
          <View style={{paddingLeft:10,paddingTop:10}}>
          </View>
          <ScrollView>
             <Text style={{fontSize:18,color:'black',paddingLeft:20}}>Pizza Units</Text>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Hawaiian Pizza'} price={'319 Baths'}  images={require('../images/PizzaA.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')}  menu={'Solon Sea Pizza'} price={'329 Baths'}  images={require('../images/PizzaB.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Slim Pizza Red Sause'} price={'199 Baths'}  images={require('../images/PizzaD.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Iconic Pizza'} price={'159 Baths'}  images={require('../images/PizzaC.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Hawaiian Pizza'} price={'319 Baths'}  images={require('../images/PizzaA.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Solon Sea Pizza'} price={'329 Baths'}  images={require('../images/PizzaE.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Slim Pizza Red Sause'} price={'199 Baths'}  images={require('../images/PizzaD.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Iconic Pizza'} price={'159 Baths'}  images={require('../images/PizzaC.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Poppuic Pizza'} price={'249 Baths'}  images={require('../images/PizzaA.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Poppuic Pizza'} price={'249 Baths'}  images={require('../images/PizzaB.png')}/>
              <PizzaItem icon={require('../images/ArrowR.png')} menu={'Poppuic Pizza'} price={'249 Baths'}  images={require('../images/PizzaE.png')}/>
              <Text style={{fontSize:18,color:'black',paddingLeft:20}}>Drink` Units</Text>
              <PizzaItem icon={require('../images/OptionAdd.png')}  menu={'Pepsi Can'} price={'19 Baths'}  images={require('../images/PepsiCan.png')}/>
              <PizzaItem icon={require('../images/OptionAdd.png')} menu={'SomeOther Can'} price={'19 Baths'}  images={require('../images/PepsiCan.png')}/>
              <PizzaItem icon={require('../images/OptionAdd.png')} menu={'PepsiMax Can'} price={'22 Baths'}  images={require('../images/PepsiCan.png')}/>
              <PizzaItem icon={require('../images/OptionAdd.png')}  menu={'Coke Low Sugar Can'} price={'22 Baths'}  images={require('../images/PepsiCan.png')}/>
           
          </ScrollView>
        </View>
      );
    }
  }
  

  