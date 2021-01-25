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
  ScrollView,
  Dimensions
} from "react-native";
import { TabNavigator } from "react-navigation";
import MoviesList from "../components/MoviesList";
import ComingsoonMovies from "../components/ComingsoonMovies";
import { Container, Header, Tab, Tabs, TabHeading } from "native-base";
import BillPaymentPage from "./BillPaymentPage";
import HeaderNav from "../components/HeaderNav2";
import GameItem from "../components/GameItem";

const win = Dimensions.get("window");

type Props = {};
export default class SfPage extends Component<Props> {
  static navigationOptions = {
    header: ({ navigation }) => (
      <HeaderNav
        onPress={() => {
          navigation.goBack(null);
        }}
        titleHeader="Game Credits"
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Tabs
            initialPage={0}
            tabBarUnderlineStyle={styles.tabUnderline}
            tabContainerStyle={{ height: 40 }}
          >
            <Tab
              heading="PC Game Top-up"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.tabStyle}
              textStyle={styles.tabLabel}
              activeTextStyle={styles.tabLabelActive}
            >
              <ScrollView style={{ flex: 1, backgroundColor: "#F5F6F8" }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#F5F6F8",
                    flexWrap: "wrap",
                    flexDirection: "row"
                  }}
                >
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/garena.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Blad & Soul"
                      itemPic={require("../images/bns.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="FIFA Online 3"
                      itemPic={require("../images/ea.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Point Blank"
                      itemPic={require("../images/pb.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Hero of Newwerth"
                      itemPic={require("../images/hon.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Blad & Soul"
                      itemPic={require("../images/bns.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="League of Legends"
                      itemPic={require("../images/lol.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Vindictus"
                      itemPic={require("../images/vindictus.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Xshot"
                      itemPic={require("../images/xshot.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="TwelveSky2"
                      itemPic={require("../images/ts2.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Dark Story 2 / Titan"
                      itemPic={require("../images/ds2.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Fantasy Frontier"
                      itemPic={require("../images/ffo.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Edda Online"
                      itemPic={require("../images/edda.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Warface"
                      itemPic={require("../images/wf.png")}
                    />
                  </View>
                </View>
              </ScrollView>
            </Tab>
            <Tab
              heading="Cash Cards"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.tabStyle}
              textStyle={styles.tabLabel}
              activeTextStyle={styles.tabLabelActive}
            >
              <ScrollView
                style={{
                  flex: 1,
                  backgroundColor: "#F5F6F8",
                  flexWrap: "wrap"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#F5F6F8",
                    flexWrap: "wrap",
                    flexDirection: "row"
                  }}
                >
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Steam Wallet Credits"
                      itemPic={require("../images/steam.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="iTunes Gift Card"
                      itemPic={require("../images/itune.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Facebook Games Credits"
                      itemPic={require("../images/fbcoin.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/excash.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/acash.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/dcard.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/winner.jpg")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/cubicash.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/tot.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/pst.png")}
                    />
                  </View>
                  <View style={styles.gameItem}>
                    <GameItem
                      itemName="Garena Shells"
                      itemPic={require("../images/pstplus.png")}
                    />
                  </View>
                </View>
              </ScrollView>
            </Tab>
          </Tabs>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  tabStyle: {
    backgroundColor: "white"
  },
  tabLabel: {
    color: "#333333",
    fontSize: 14
  },
  tabLabelActive: {
    color: "#488cf1",
    fontWeight: "normal",
    fontSize: 14
  },
  tabUnderline: {
    backgroundColor: "#488cf1",
    height: 2
  },
  itemRow: {
    flexDirection: "row",
    flex: win.width / 3
  },
  gameItem: {
    width: win.width / 3
  }
});
