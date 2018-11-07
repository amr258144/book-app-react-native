import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text ,View} from 'react-native';
//import Login Component 
import Login from './src/components/Login/Login';

export default class DemoLogin extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);