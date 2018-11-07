import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('https://s3.ap-south-1.amazonaws.com/flixmates/images/flixmates.png')} />
                </View>
                <Text>Login</Text>
                <View style={styles.formContainer}>
                    <LoginForm></LoginForm>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});

export default Login