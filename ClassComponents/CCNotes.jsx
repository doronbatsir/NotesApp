import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

export default class CCNotes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.route.params.name}</Text>
                <Button title="Add Note"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });