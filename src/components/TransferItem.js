import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
export default class TransferItem extends Component {
    render(){
            return(
              <TouchableHighlight underlayColor='transparent' onPress={this.props.onPress}>
            <View style={{justifyContent:'flex-start',flexDirection:'row'}}> 
            <View style={{paddingLeft:10,paddingTop:10 ,flex:15}}>
            <Image source={this.props.images} style={{width:45 ,height:45,resizeMode:'contain'}} />
            </View>
            <View style={{flex:85}}>
            <Text style={{paddingLeft:10,paddingTop:24,color:'black',fontSize:15}}>{this.props.selection}</Text>
            </View>
            </View>
             </TouchableHighlight>
            )
    }
}