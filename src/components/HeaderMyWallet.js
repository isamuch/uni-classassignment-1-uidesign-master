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
export default class HeaderMyWallet extends Component<Props> {

    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View style={styles.header}>
                <View style={{ flex: 0.1 }}>

                    <TouchableHighlight
                        onPress={this.props.onPressBack}
                        underlayColor="transparent"
                    >
                        <Image
                            style={{ width: 20, resizeMode: "contain", marginLeft: 10, tintColor: 'white' }}
                            source={require("../images/back_btn.png")}
                        />
                    </TouchableHighlight>

                </View>
                <View style={{ flex: 0.9 }}>
                    <Text style={styles.headerText}>{this.props.titleHeader}</Text>
                </View>
                <View style={{ flex: 0.1 }}>
                    <TouchableHighlight
                        onPress={()=>{}}
                        underlayColor="transparent"
                    >
                        <Image
                            style={{ width: 25, resizeMode: "contain", marginRight: 10 }}
                            source={require("../images/plus.png")}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 56,
        // backgroundColor: '#488cf1',

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        alignSelf: "center",
        color: "white"
    }
});