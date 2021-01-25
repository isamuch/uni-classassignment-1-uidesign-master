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
} from "react-native";
import { TabNavigator } from "react-navigation";
import MoviesList from "../components/MoviesList";
import ComingsoonMovies from "../components/ComingsoonMovies";
import { Container, Header, Tab, Tabs, TabHeading } from "native-base";
import BillPaymentPage from "./BillPaymentPage";
import HeaderNav from "../components/HeaderNav2";

type Props = {};
export default class MajorPage extends Component<Props> {

  

  static navigationOptions = {
    header:  ({navigation}) => (
          <HeaderNav onPress={() => { navigation.goBack(null) }} titleHeader='Movies'/>),
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
              heading="NOW SHOWING"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.tabStyle}
              textStyle={styles.tabLabel}
              activeTextStyle={styles.tabLabelActive}
            >
              <ScrollView style={{ flex: 1 }}>
                <MoviesList color='mj' />
                <MoviesList color='mj'/>
                <MoviesList color='mj'/>
                <MoviesList color='mj'/>
              </ScrollView>
            </Tab>
            <Tab
              heading="COMING SOON"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.tabStyle}
              textStyle={styles.tabLabel}
              activeTextStyle={styles.tabLabelActive}
            >
              <View style={styles.date}>
                <Text
                  style={{ color: "#C0C0C0", fontSize: 12, marginLeft: 10 }}
                >
                  Thu, 29 Mar
                </Text>
              </View>
              <ScrollView style={{ backgroundColor: "#F5F6F8" }}>
                <ComingsoonMovies moviePic={require("../images/mv01.jpg")} />
                <ComingsoonMovies moviePic={require("../images/mv01.jpg")} />
                <ComingsoonMovies moviePic={require("../images/mv01.jpg")} />
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
  date: {
    height: 30,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  tabStyle: {
    backgroundColor: "white"
  },
  tabLabel: {
    color: "#333333",
    fontSize: 14
  },
  tabLabelActive: {
    color: "#d0492a",
    fontWeight: "normal",
    fontSize: 14
  },
  tabUnderline: {
    backgroundColor: "#d0492a",
    height: 2
  }
});
