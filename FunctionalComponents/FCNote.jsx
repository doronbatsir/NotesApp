import React from 'react'
import { View, Text,TouchableHighlight,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function FCNote(props) {
    return (
        <View style={styles.centeredView}>
                <TouchableHighlight
                style={styles.openButton}>
                <Text style={styles.textStyle}> {props.title + "    " + props.content}</Text>
              </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    centeredView: {
        
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
      }
  });