
import React, { Component  } from 'react';
import { Image ,Text} from 'react-native' ;
import { Container, Header, Content, Form, Item, Input  , Button ,Card,CardItem,View} from 'native-base';
import DatePicker from 'react-native-datepicker'


export default class HotelItem extends Component {
    constructor(props){
        super(props)
        this.state = {dateIn:"2018-03-15" , dateOut:"2018-03-30" , Rooms:1 }
        }

  render() {
    return (
        <CardItem style={{  flexDirection:'row',justifyContent:'center' }}>
                <Image source={this.props.hotels}
                    style={{width:320,height:320,resizeMode:'contain',justifyContent:'center' , borderRadius:40}}/>    
        </CardItem>
     
    );
  }
}