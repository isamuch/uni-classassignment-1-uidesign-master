/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { TabNavigator } from "react-navigation";
import MoviesList from "../components/MoviesList";
import ComingsoonMovies from "../components/ComingsoonMovies";
import { Container, Header, Tab, Tabs, TabHeading } from "native-base";
import BillItem from "../components/BillItem";
import HeaderNav from "../components/HeaderNav2"

type Props = {};
export default class BillPaymentPage extends Component<Props> {
  static navigationOptions = {
    header: ({navigation}) => (
      <HeaderNav onPress={() => navigation.goBack(null)} titleHeader='Bill Payment'/>),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <BillItem
              billPic={require("../images/creditcard.jpg")}
              label="Credit Card / Loan Bills"
            />
            <BillItem
              billPic={require("../images/utility.jpg")}
              label="Utility Bills"
            />
            <BillItem
              billPic={require("../images/telco.jpg")}
              label="Telco Bills"
            />
            <BillItem
              billPic={require("../images/insurance.jpg")}
              label="Insurance Bills"
            />
            <BillItem
              billPic={require("../images/leasing.jpg")}
              label="Leasing Bills"
            />
            <BillItem
              billPic={require("../images/estate.jpg")}
              label="Estste Bills"
            />
            <BillItem
              billPic={require("../images/other.jpg")}
              label="Other Bills"
            />
          </ScrollView>
        </View>
        <View
          style={{
            height: 85,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            borderTopColor: "grey",
            borderTopWidth: StyleSheet.hairlineWidth
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              height: 100,
              justifyContent: "center"
            }}
          >
            <Image
              style={{ height: 45, width: 45 }}
              source={require("../images/barcodebill.jpg")}
            />
            <Text>Scan Bill</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderLeftColor: "grey",
              borderLeftWidth: StyleSheet.hairlineWidth,
              height: 100,
              justifyContent: "center"
            }}
          >
            <Image
              style={{ height: 45, width: 45 }}
              source={require("../images/searchbill.jpg")}
            />
            <Text>Search Bill</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5F6F8",
    flexDirection: "column"
  },
  header: {
    height: 56,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    marginRight: 30,
    color: "black"
  }
});
