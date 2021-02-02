import React from 'react';
import { View, Text,TouchableHighlight,StyleSheet,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

export default function FCCategory(props) {
function Send2DeleteCategory(){
console.log("deleteCategory");
  props.deleteCategory(props.index)
}
const showAlert=()=>{
  Alert.alert(
      'Are you sure you want to delete this category?',
      '',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
        },
        { text: 'Yes', onPress:Send2DeleteCategory }
      ],
      { cancelable: false }
    );
  }
    const navigation = useNavigation();
    return (
        <View style={styles.centeredView}>
                <TouchableHighlight
                style={styles.openButton}
                onPress={()=>navigation.navigate('CCNotes',{name:props.name,notes:props.notes})}>
               
                <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textStyleName}> {props.name}</Text>
                <Text style={styles.textStyle}> {props.amount}</Text>
            <Icon
              style={{ alignSelf: 'flex-end' }}
              name='cancel'
              type='material'
              color='white'
              size={28}
              onPress={showAlert}
            />

          </View>
              </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    openButton: {
      backgroundColor: "#35BEB7",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:280
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize:24,
      alignSelf:'flex-end',
      marginRight:10
    },
    textStyleName: {
      color: "white",
      fontWeight: "bold",
      fontSize:24,
      alignSelf:'flex-start',
      flex:1
    },
    centeredView: {
        
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        
        
      }
  });