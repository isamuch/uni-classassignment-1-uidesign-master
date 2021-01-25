import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Button,
    Image
} from 'react-native';

//Components
import HeaderNav from '../components/HeaderNav'
import ButtonComp from '../components/ButtonComp'
import BusTicketItem from '../components/BusTicketItem'

//Image
import images from '../index';

export default class BusTicket extends Component {
    constructor(props) {
        super(props)
    }

    _onPressBack = () => {
        return this.props.navigation.pop()
    }


    render() {

        return (
            <View style={styles.container}>
                <HeaderNav
                    backBtn={'true'}
                    titleHeader={'  ซื้อตั๋ว'}
                    onPressBack={this._onPressBack}
                    imgRight={'ticket2'}
                />
                <View style={styles.lineStyle}>
                    <BusTicketItem
                        title={'ต้นทาง'}
                        position={'flex-start'}
                        value={'กรุงเทพ'}
                    />
                    <Image source={images['busTicket']} style={styles.imgStyle} />
                    <BusTicketItem
                        title={'ปลายทาง'}
                        position={'flex-end'}
                        value={'ระยอง'}
                    />
                </View>
                <View style={styles.lineStyle}>
                    <BusTicketItem
                        title={'วันเดินทาง'}
                        position={'flex-start'}
                        value={'จ., 02 เม.ย.'}
                    />
                    <View style={{width:45, height:45}}/>
                    <BusTicketItem
                        title={'ผู้เดินทาง'}
                        position={'flex-end'}
                        value={'1'}
                    />
                </View>
                <View style={{ flex: 1 }} />
                <Text style={styles.helpStyle}>วิธีซื้อและรับบัตร</Text>
                <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                    <ButtonComp
                        txt='ตารางเวลาและราคา'
                        width={350}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    helpStyle: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#488cf1'
    },
    lineStyle: {
        flexDirection: 'row',
        marginTop: 20 
    },
    imgStyle: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});
