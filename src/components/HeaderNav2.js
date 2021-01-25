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

type Props = {};
export default class HeaderNav extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 0.1 }}>
          <TouchableHighlight
            onPress={this.props.onPress}
            underlayColor="transparent"
          >
            <Image
              style={{ width: 20, resizeMode: "contain", marginLeft: 10 }}
              source={require("../images/back_btn.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={{ flex: 0.9 }}>
          <Text style={styles.headerText} numberOfLines={1}>{this.props.titleHeader}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
