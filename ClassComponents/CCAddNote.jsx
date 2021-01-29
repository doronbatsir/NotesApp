import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import moment from "moment";

export default class CCAddNote extends Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Text> {moment().format("DD-MM-YYYY hh:mm")} </Text>

        <Input
          placeholder='Note Title'
          onChangeText={value => this.setState({ title: value })}
        />
        <Input
          placeholder="Note Content" multiline = {true}
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
         
          onChangeText={value => this.setState({ content: value })}
        />

<TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", margin:5 }}
                onPress={()=>this.props.navigation.navigate('CCNotes')}>
                <Text style={styles.textStyle}>Save</Text>
              </TouchableHighlight>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  centeredView: {
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});