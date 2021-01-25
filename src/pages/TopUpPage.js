import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import HeaderNav from "../components/HeaderNav2";
import TopUpItem from "../components/TopUpItem";

const win = Dimensions.get("window");

export default class TopUpPage extends Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <HeaderNav
        onPress={() => {
          navigation.goBack(null);
        }}
        titleHeader="Top-Up Cards"
      />
    )
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F5F6F8",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <View style={styles.topUpItem}>
          <TopUpItem
            itemName="Ais 1-2 Call Cash Card"
            itemPic={require("../images/ais.png")}
          />
        </View>
        <View style={styles.topUpItem}>
          <TopUpItem
            itemName="True Money CashCard"
            itemPic={require("../images/true.png")}
          />
        </View>
        <View style={styles.topUpItem}>
          <TopUpItem
            itemName="Dtac Cash Card"
            itemPic={require("../images/dtac.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topUpItem: {
    width: win.width/3,
    height:110
  }
});
