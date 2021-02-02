import React from 'react'
import { View, Text,TouchableHighlight,StyleSheet,Image,Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function FCNote(props) {
    function Send2DeleteNote(){
        props.deleteNote(props.index)
    }
const showAlert=()=>{
    Alert.alert(
        'Are you sure you want to delete this note?',
        '',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
          },
          { text: 'Yes', onPress:Send2DeleteNote }
        ],
        { cancelable: false }
      );
    }
    return (
              <Card style={styles.centeredView}>
  <View style={{flexDirection:'row'}}>
  <Text style={{alignSelf:'flex-start',flex:1}}>{props.time}</Text>
  <Icon
  style={{alignSelf:'flex-end'}}
  name='delete'
  type='material'
  color='black'
  onPress={showAlert}
/>
</View>
  <Card.Title>{props.title}</Card.Title>
  <Card.Divider/>
  {props.image!=="../assets/noImage.png"&&props.image!==""?<Card.Image source={{ uri: props.image }}></Card.Image>:<Text></Text>}
  
  <Text style={{marginBottom: 10,width:300}}>
      {props.content}
    </Text>

</Card>
        
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
        marginTop: 20,
        
        
      }
  });