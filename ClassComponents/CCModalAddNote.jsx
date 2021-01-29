import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { Input } from 'react-native-elements';
import moment from "moment";
import { TextInput } from 'react-native';

class App extends Component {
  state = {
    modalVisible: false
  };

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
      let OBJNote={title:this.state.title,content:this.state.content,time:moment().format("DD-MM-YYYY hh:mm")}
      this.props.sendToNotes(OBJNote);
    }
  }

  render() {
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
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,width:200, margin:1}}
                onChangeText={value => this.setState({ title: value })}
              />
             <Text style={{marginTop:15}}>Content</Text>
              <TextInput
                placeholder="Note Content" multiline={true} numberOfLines={10}
                style={styles.textArea}
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => this.setState({ content: value })}
              />


              <View style={{ flexDirection: "row" }}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3", margin: 5 }}
                  onPress={this.BTNSaveNote}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3", margin: 5 }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
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
    marginTop: 22,
    
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    height: 50,
     borderColor: 'gray',
      borderWidth: 1 ,
      width:200,
       margin:1,
       textAlignVertical: 'top',
       marginBottom:15
  },
  modalView: {
    marginBottom: 200,
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
    marginBottom: 5,
    textAlign: "center",
    fontSize:24,
    fontWeight:"bold"
  }
});

export default App;