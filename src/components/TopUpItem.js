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

type Props = {};
export default class TopUpItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.img} source={this.props.itemPic} />
        </View>
        <View style={styles.textLayout}>

            <Text style={styles.textStyles}>
              {this.props.itemName}
            </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
  },
  item: {
    flex: 0.6,
    backgroundColor: "white",
    justifyContent: "flex-end"
  },
  img: {
    height: 50,
    alignSelf: "center",
    resizeMode: "contain"
  },
  textLayout: {
    flex: 0.4,
  },
  textStyles: {
    color: "black",
    alignSelf: "center",
    marginTop: 10,
    textAlign:'center',
    fontSize: 13,
    margin: 10,
  }
});
