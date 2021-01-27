import React from 'react';
import { Button } from 'react-native';
import { View, Text,TouchableHighlight,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FCCategory(props) {

    const navigation = useNavigation();
    return (
        <View style={styles.centeredView}>
                <TouchableHighlight
                style={styles.openButton}
                onPress={()=>navigation.navigate('CCNotes',{name:props.name,notes:props.notes})}>
                <Text style={styles.textStyle}> {props.name + "    " + props.amount}</Text>
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