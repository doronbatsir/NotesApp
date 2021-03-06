import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { TextInput } from 'react-native';

class App extends Component {
  state = {
    modalVisible: false,
    Cname:""
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  BTNSaveCategory=()=>{
    let isExist=this.props.categoriesArr.some(category=>category.name===this.state.Cname)
    if(!isExist){
    this.setModalVisible(!this.state.modalVisible);
    if(this.state.Cname!==null&&this.state.Cname!==""&&this.state.Cname!==undefined)
    {
    this.props.sendToHome(this.state.Cname);
    this.setState({Cname:""});
    console.log(this.state.Cname)
  }
}
else{
  Alert.alert("the category name is already exist")
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
              <Text style={styles.modalText}>Category Name:</Text>
              <TextInput placeholder="Category Name" style={{ height: 40, borderColor: 'gray',borderRadius: 10, borderWidth: 1 ,width:190, margin:15}} 
              onChangeText={value=>this.setState({Cname:value})}/>
            <View style={{flexDirection:"row"}}>
            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#e8a297", margin:5 }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={this.state.Cname == "" ? styles.disabled : styles.saveButton}
                onPress={this.BTNSaveCategory}
                disabled={!this.state.Cname} 
              >
                <Text style={styles.textStyle}>Save</Text>
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
          <Text style={styles.textStyle}>Add Category +</Text>
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
    marginTop: 1
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
    backgroundColor: "#828787",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  saveButton: {
    backgroundColor: "#828787",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#90dea2",
    margin:5
  },
  disabled: {
    backgroundColor: "#828787",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#90dea2",
    margin:5,
    opacity:0.5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:16
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontSize:17
  }
});

export default App;