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

import images from '../index'

type Props = {};
export default class HeaderNav extends Component<Props> {

  constructor(props) {
    super(props)

    this.state = {
      backBtn: this.props.backBtn,
    }
  }

  render() {

    return (
      <View style={styles.header}>
        <View style={{  }}>
          {this.state.backBtn
            &&
            <TouchableHighlight
              onPress={this.props.onPressBack}
              underlayColor="transparent"
            >
              <Image
                style={{ width: 20, resizeMode: "contain", marginLeft: 10 }}
                source={require("../images/back_btn.png")}
              />
            </TouchableHighlight>
          }
        </View>
        <View style={{ flex: 1}}>
          <Text style={styles.headerText}>{this.props.titleHeader}</Text>
        </View>
        <View style={{  }}>
          {this.props.imgRight
            &&
            <TouchableHighlight
              onPress={() => { }}
              underlayColor="transparent"
            >
              <Image
                style={{ width: 25, resizeMode: "contain", marginRight: 15 }}
                source={images[this.props.imgRight]}
              />
            </TouchableHighlight>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: 'white',
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
    color: "black"
  }
});