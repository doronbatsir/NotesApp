import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,Image, KeyboardAvoidingView
} from "react-native";
import { Input } from 'react-native-elements';
import moment from "moment";
import { TextInput } from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class CCModalAddNote extends Component {
  constructor(props) {
  super(props)
  this.state = {
    modalVisible: false,
    hasCameraPermission:null
  };
}

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  BTNSaveNote = () => {
    this.setModalVisible(!this.state.modalVisible);
    if ((this.state.title !== null && this.state.title !== "" && this.state.title !== undefined) && (this.state.content !== null && this.state.content !== "" && this.state.content !== undefined)) {
      this.setState({ title: "" });
      console.log(this.state.title)
      this.setState({ content: "" });
      console.log(this.state.content)
      let OBJNote = { title: this.state.title, content: this.state.content,
        image:this.state.image, time: moment().format("DD-MM-YYYY hh:mm") }
      this.props.sendToNotes(OBJNote);
      this.setState({ image: ""});
    }
  }
  btnOpenGalery = async () => {
    console.log("btnOpenGalery");
    let result = await ImagePicker.launchImageLibraryAsync({
        //allowsEditing: true,
        //aspect: [4, 3],
    });
    if (!result.cancelled) {
        this.setState({ image: result.uri });
        
    }
};
btnOpenCamera=()=>{
  this.setModalVisible(!this.state.modalVisible);
  this.props.navigation.navigate('CameraPage')
};

  render=()=> {
    let { image } = this.state;
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create New Note</Text>
              <Text>Title</Text>
              <TextInput
                placeholder='Note Title' label="title"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 240, margin: 1, borderRadius: 10 }}
                onChangeText={value => this.setState({ title: value })}
              />
              <Text style={{ marginTop: 15 }}>Content</Text>
              <TextInput
                placeholder="Note Content" multiline={true} numberOfLines={10}
                style={styles.textArea}
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => this.setState({ content: value })}
              />
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  style={{}}
                  reverse
                  name='add-a-photo'
                  type='material'
                  color='#8ed0d1'
                  size={20}
                  onPress={this.btnOpenCamera}
                />
                <KeyboardAvoidingView behavior="padding">
                <Icon
                  style={{}}
                  reverse
                  name='add-photo-alternate'
                  type='material'
                  color='#8ed0d1'
                  size={20}
                  onPress={this.btnOpenGalery}
                />
                </KeyboardAvoidingView>
              </View>
              <View style={{ flexDirection: "row" }}>
              <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#e8a297", margin: 5 }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#90dea2", margin: 5 }}
                  onPress={this.BTNSaveNote}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableHighlight>

              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButtonAdd}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Add Note +</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,

  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    width: 240,
    margin: 1,
    textAlignVertical: 'top',
    marginBottom: 15,
    borderRadius: 10
  },
  modalView: {
    //marginBottom: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
  openButtonAdd: {
    backgroundColor: "#828787",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 40
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:16
  },

  modalText: {
    marginBottom: 5,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default CCModalAddNote;