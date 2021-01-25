import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default class PizzaItem extends Component {
    
    render() {

      return (

            <View style={{flexDirection:'row',paddingLeft:9}}>
              <View style={{flex:25}}>
                <Image
                source={this.props.images}
                style={{width:70,height:70,resizeMode:'contain' }}
                />
              </View>
              <View style={{flex:65,paddingTop:10}} >
                <Text style={{color:'black',fontStyle:'italic'}}>{this.props.menu} </Text>
                <Text> {this.props.price} </Text>
              </View>
              <View style={{flex:10,paddingTop:17}}>
               <Image
                source={this.props.icon}
                style={{width:20,height:20,resizeMode:'contain',paddingTop:10 }}
                />
              </View>
            </View> 
 
      );
    }
  }