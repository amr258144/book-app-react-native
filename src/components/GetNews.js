import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'

class NewsFetch extends Component {
    state = {
        res: ''
    }
    componentDidMount = () => {
        fetch('http://flixmates.net/v1/news', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': '$2y$10$2CWxv7XiAsi429fNC85wsuYgAyjxbde2cJzaCE/DXRaFvWE9xlace'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(`responseJson blank one ${this.state.res}`);
            this.setState({
                res: responseJson.data
            })
            console.log("HERE IS THE MESSAGE");
            console.log(`HI, ${this.state.res}`);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    consoleFunc = () => {
        console.log(this.state.res)
        this.state.res.map((item,i) => {
            console.log(item.id);
        })
    }
    render() {
        if(this.state.res === '' || this.state.res === 'undefined') {
            return null;
        }
        return (
            <View>
                <ScrollView>
                {
                    this.state.res.map((item, index) => (
                        <TouchableOpacity key = {item.id}>
                            <View style = {styles.itemList}>
                                <Image source = {{uri: 'https://s3.ap-south-1.amazonaws.com/testflix/' + item.image}} style={{ width: 330, height: 110}} resizeMode="contain" />
                            </View>
                            <View>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

export default NewsFetch

const styles = StyleSheet.create({
    itemList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
    }
})