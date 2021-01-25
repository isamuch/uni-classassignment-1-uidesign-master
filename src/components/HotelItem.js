import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Text, Button, Card, CardItem, View } from 'native-base';
import DatePicker from 'react-native-datepicker'


export default class HotelItem extends Component {
    constructor(props) {
        super(props)
        this.state = { dateIn: "", dateOut: "" }
    }

    render() {
        return (
            <View style={{ backgroundColor: "#EBF4FA", paddingTop: 5, paddingBottom: 9 }}>
                <Item>
                    <Text style={{ color: "black", padding: 5, fontWeight: "bold", fontSize: 12 }}>จุดหมายปลายทาง</Text>
                </Item>
                <Item>
                    <Input placeholder="ประเทศ เมือง พื้นที่ โรงแรม" style={{ color: "black", padding: 5, fontWeight: "bold", fontSize: 12 }} />
                </Item>
                <Item>
                    <Text style={{ color: "black", padding: 5, fontWeight: "bold", fontSize: 12 }}>วันเข้าพัก</Text>
                </Item>
                <Item>
                    <DatePicker
                        style={{ width: 330, padding: 5 }}
                        date={this.state.dateIn}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2017-05-01"
                        maxDate="2050-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{

                            dateInput: {
                                margin: 3
                            }
                        }}
                        showIcon={false}
                        onDateChange={(date) => { this.setState({ dateIn: date }) }}
                    />
                </Item>
                <Item>
                    <Text style={{ color: "black", padding: 5, fontWeight: "bold", fontSize: 12 }}>วันเช็คเอ้าท์</Text>
                </Item>

                <Item>
                    <DatePicker
                        style={{ width: 330, padding: 5 }}
                        date={this.state.dateOut}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2017-05-01"
                        maxDate="2050-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                margin: 3
                            }
                        }}
                        showIcon={false}

                        onDateChange={(date) => { this.setState({ dateOut: date }) }}
                    />
                </Item>
                <Item>
                    <Text style={{ color: "black", padding: 5, fontWeight: "bold", fontSize: 12 }}>ผู้เข้าพักทั้งหมด</Text>
                </Item>
                <Item>
                    <Input placeholder="1 ห้อง , 2 ผู้เข้าพัก" style={{ color: "black", padding: 5, fontWeight: "bold", fontSize: 12 }} />
                </Item>
                <Button full info style={{ marginLeft: 7, marginRight: 7, paddingBottom: 9 }}>
                    <Text>Search</Text>
                </Button>
            </View>
        );
    }
}