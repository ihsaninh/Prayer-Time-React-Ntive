import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';

export default class Login extends Component {

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>Welcome to my React Native Boiler Plate</Text>
        <Text style={styles.smallText}>Build By Ihsan Nurul Habib</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigText: {
    fontSize: 20
  },
  smallText: {
    marginVertical: 10
  }
})