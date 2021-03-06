/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow 
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>App component</Text>
        <Button onPress={() => this.props.navigation.navigate('Test')} title="goto Test"></Button>

      </View>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Test component</Text>
        <Button onPress={() => this.props.navigation.navigate('App')} title="goto App"></Button>
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

export default createStackNavigator({
  home: App,
  test: Test
})