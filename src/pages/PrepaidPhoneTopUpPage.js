import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from "react-native";
import HeaderNav from "../components/HeaderNav2";
import { Row } from "native-base";

export default class PrepaidPhoneTopUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "0959566983" };
  }

  static navigationOptions = {
    header: ({ navigation }) => (
      <HeaderNav
        onPress={() => {
          navigation.goBack(null);
        }}
        titleHeader="Prepaid Phone Top-Up"
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.textInputLayout}>
            <View style={{flex:0.2,justifyContent:'center',marginLeft:15}}>
                  <Text style={{color:'black',fontSize:14}}>Phone</Text>  
            </View>
            <View style={{flex:0.7,justifyContent:'center'}}>
            <TextInput
              autoFocus
              value={this.state.input}
              selectionColor="lightgrey"
              underlineColorAndroid="rgba(0,0,0,0)"
              style={{ height: 50, fontSize: 16 ,color:'#666666'}}
              onChangeText={text => this.setState({ input: text })}
            />
            </View>
            <View style={{flex:0.1,justifyContent:'center'}}>
                <Image style={{width:25,height:25,resizeMode:'contain'}}
                        source={require('../images/contact.png')}
                />
            </View>
          </View>
          <View style={styles.textInputLayout2}>
            <View style={{flex:0.2,justifyContent:'center',marginLeft:15}}>
                  <Text style={{color:'black',fontSize:14}}>Telco</Text>  
            </View>
            <View style={{flex:0.8,justifyContent:'center'}}>
                <Text style={{color:'lightgrey',fontSize:16}}>Select Telco</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomStyle}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ fontSize: 16, color: "black" }}>Subtotal</Text>
            </View>
            <View style={styles.textLayout}>
              <Text style={{ fontSize: 20, color: "black" }}>฿ 0.00</Text>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <TouchableOpacity
              disabled={true}
              style={styles.button}
              onPress={() => alert("sfsdf")}
            >
              <Text style={styles.textBtn}> Next </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F6F8",
    justifyContent: "flex-end"
  },
  bottomStyle: {
    height: 110,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderTopWidth: 0.5
  },
  button: {
    alignItems: "center",
    backgroundColor: "#E0E3E5",
    padding: 10,
    marginLeft: 15,
    marginRight: 15
  },
  textBtn: {
    color: "white",
    fontSize: 18
  },
  textLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 15
  },
  textInputLayout: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'white',
    height:55,
    marginTop: 15,
    borderTopWidth:0.5,
    borderBottomWidth: 0.5,
    borderColor:'lightgrey'
  },textInputLayout2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'white',
    height:55,
    borderBottomWidth: 0.5,
    borderColor:'lightgrey'
  }
});
