import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import images from '../index';

//Navigator
import { NavigationActions } from "react-navigation";

export default class HomeIconItem extends Component {

    _onPress = (page) => {
        if (page) {
            const navigateAction = NavigationActions.navigate({
                type: 'Navigation/NAVIGATE',
                routeName: page,
                params: {},
            });
            appNavRef.dispatch(navigateAction)
        }
    }

    render() {

        return (
            <TouchableHighlight
                style={{ flex: 1 }}
                underlayColor={this.props._underlayColor}
                onPress={() => this._onPress(this.props.page)}
            >
                <View style={[styles.container, { backgroundColor: this.props.color.colorIcon }]}>
                    <Image
                        style={styles.imageStyle}
                        source={images[this.props.data.image]} />
                    <Text style={[styles.textStyle, { color: this.props.color.colorText }]}>
                        {this.props.data.label}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    imageStyle: {
        width: 45,
        height: 45,
        resizeMode: 'contain'
    },
    textStyle: {
        marginTop: 13,
        fontSize: 17,
    }
});
