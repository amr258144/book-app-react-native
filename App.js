/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Linking} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://s3.ap-south-1.amazonaws.com/flixmates/images/flixmates.png'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Flixmates!</Text>
        <Text style={styles.instructions}>To get started,&nbsp;
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://flixmates.com/')}>
            Sign Up/Sign In here
          </Text>
        </Text>
        
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{ width: 230, height: 110}} resizeMode="contain"></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
