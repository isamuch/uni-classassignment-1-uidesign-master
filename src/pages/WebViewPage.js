import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  WebView,
} from 'react-native';
import TransferItem from '../components/TransferItem';


export default class WebViewpageFrom extends Component {
  constructor(props){
    super(props)
    this.state = {link:'https://www.google.com'}
  }
     
    render() {
      const {link} = this.props.navigation.state.params ; // จำไว้ ตั้งชื่อ ที่ส่งมาจากหน้า TransferPage ให้ตรงกกัน link ของหน้าเก่า = link หน้านี้
      if(link == null){
        return (
          <WebView
          source={{uri:this.state.link}} 
           />
        );
      } else{
        return (
          <WebView
          source={{uri:link}} 
           />
        );
      }

    }
  }