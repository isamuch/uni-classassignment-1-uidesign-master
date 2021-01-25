import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  WebView,
} from 'react-native';

export default class DonationItem extends Component {
    _OnPress = () => { 
        alert('Test')
    }
    render() {


      return (
        
         <View style={{paddingTop:7}}> 

        <TouchableHighlight onPress={ ()=> this._OnPress() } underlayColor='transparent' >
        <View style={{flexDirection:'row'}}>
          <View style={{flex:0.15,
                    paddingLeft:10,
                    paddingRight:10}}>
            <Image
            source={this.props.images}
            style={{width:50,height:50,resizeMode:'contain' }}
            />
          </View>
          <View style={{flex:.85,flexDirection:'column'}}>
            <Text
            style={{fontSize:15,color:'black'}}
            >{this.props.title}</Text>
            <Text>{this.props.description}</Text>
          </View>
        </View>
        </TouchableHighlight>

        </View>
      );
    }
  }