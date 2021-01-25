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
  Dimensions
} from "react-native";

const win = Dimensions.get("window");
type Props = {};
export default class MoviesList extends Component<Props> {
  render() {
    const colorType = this.props.color;
    buyBtn = function(colorType) {
      return {
        color: colorType == 'sf' ? "#488cf1" : "#d0492a",
        borderColor: colorType == 'sf' ? "#488cf1" : "#d0492a",
        borderWidth: 1.2,
        borderRadius: 3,
        paddingTop: 5,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 5,
        marginTop: 5
      };
    };
    return (
      <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.picLayout}>
            <Image
              style={styles.image}
              source={require("../images/mv01.jpg")}
            />
          </View>
          <Text style={styles.movName}>Orphan</Text>
          <Text style={styles.movDetail}>น99+ | Comedy |</Text>
          <Text style={styles.movDetail}>Horror</Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <TouchableHighlight
              onPress={() => alert("Buy")}
              underlayColor={colorType == 'sf' ? "#488cf1" : "#d0492a"}
            >
              <Text style={buyBtn(colorType)}>Buy</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.picLayout}>
            <Image
              style={styles.image}
              source={require("../images/mv01.jpg")}
            />
          </View>
          <Text style={styles.movName}>Orphan</Text>
          <Text style={styles.movDetail}>น99+ | Comedy |</Text>
          <Text style={styles.movDetail}>Horror</Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <TouchableHighlight
              onPress={() => alert("Buy")}
              underlayColor={colorType == 'sf' ? "#488cf1" : "#d0492a"}
            >
              <Text style={buyBtn(colorType)}>Buy</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.picLayout}>
            <Image
              style={styles.image}
              source={require("../images/mv01.jpg")}
            />
          </View>
          <Text style={styles.movName}>Orphan</Text>
          <Text style={styles.movDetail}>น99+ | Comedy |</Text>
          <Text style={styles.movDetail}>Horror</Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <TouchableHighlight
              onPress={() => alert("Buy")}
              underlayColor={colorType == 'sf' ? "#488cf1" : "#d0492a"}
            >
              <Text style={buyBtn(colorType)}>Buy</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movDetail: {
    fontSize: 12,
    alignSelf: "center"
  },
  movName: {
    color: "black",
    alignSelf: "center"
  },
  buyBtn: {
    color: "#d0492a",
    borderColor: "#d0492a",
    borderWidth: 1.2,
    borderRadius: 3,
    paddingTop: 5,
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 5,
    marginTop: 5
  },
  picLayout: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: win.width / 3 * 1.37,
    resizeMode: "stretch",
    margin: 7
  },
});
