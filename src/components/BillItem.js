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
  TouchableHighlight
} from "react-native";

type Props = {};
export default class BillItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.billItem}>
          <Image
            style={{
              height: 35,
              width: 35,
              alignSelf: "center",
              resizeMode:'contain'
            }}
            source={this.props.billPic}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.billLabel}>{this.props.label}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 66,
    backgroundColor: "white",
  },
  billLabel: {
    color: "black",
    marginLeft: 10,
    fontSize: 16
  },
  billItem:{
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft:15,
    flexDirection: "row",
    flex: 1,
  }
});
