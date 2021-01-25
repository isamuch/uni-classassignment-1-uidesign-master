import React, { Component } from 'react';
import {
  StyleSheet,Image,TouchableHighlight
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Text, Button, Card, CardItem, View, Thumbnail } from 'native-base';

import HeaderNav from '../components/HeaderNav2'

export default class SkootarPage extends Component {

    static navigationOptions = {
        header:  ({navigation}) => (
              <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='Skootar'/>),
      };
    
    render() {


      return (
        <Container>
              <Content>
                <Card style={{flexDirection:'row',justifyContent:'flex-start',flex:1}}>
                     <TouchableHighlight underlayColor='transparent' onPress={()=>
                        alert('CreateEvent')
                    }>
                    <CardItem style={{flex:6}}>
                        <Image source={require('../images/CreateIcon.png') }
                         style={{paddingLeft:14,width:28,height:28,resizeMode:'contain'}} />
                         <Text style={{marginLeft:8}}> สร้างงาน </Text>
                    </CardItem>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='transparent' onPress={()=>
                        alert('NotificationEvent')
                    }>
                    <CardItem style={{flex:4}}>
                        <Image source={require('../images/BellIcon.png') }
                         style={{paddingLeft:14,width:28,height:28,resizeMode:'contain'}} />
                         <Text style={{marginLeft:8}}> การแจ้งเตือน </Text>
                    </CardItem>
                    </TouchableHighlight>
                </Card>
                <Card>
                    <CardItem>
                    <Thumbnail source={require('../images/SkootarPic.png')}
                    style={{width:400,height:400,resizeMode:'contain',justifyContent:'center'}}/>
                    </CardItem>
                    <CardItem style={{justifyContent:'center'}}>
                    
                     <Button rounded primary onPress={()=> 
                        alert('Alert of Create Event')}>
                         <Text>Create Event</Text>
                      </Button>
                    </CardItem>
                </Card>
           
            </Content>
        </Container>
      );
    }
  }
  
