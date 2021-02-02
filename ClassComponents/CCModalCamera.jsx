import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View, Image, KeyboardAvoidingView
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
import { Button, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../pageStyle';


//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class CCModalCamera extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photoUri: '../assets/icon.png',
      

    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  btnSnap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ quality: 0.2 });
      this.setState({ photoUri: photo.uri });
    }
  };

  btnUpload = () => {
    this.setModalVisible(!this.state.modalVisible);
    this.props.send2AddNote(this.state.photoUri);
  };

  render = () => {
    let { image } = this.state;
    const { modalVisible } = this.state;

    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return                           <Icon
      style={{}}
      reverse
      name='add-a-photo'
      type='material'
      color='#bababa'
      size={20}
    />;
    } else {
      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.setState({ photoUri: '../assets/icon.png'});
            }}
          >
            <View style={styles.container}>

              <View style={styles.Content}>

                <View style={{ alignItems: 'center' }}>
                <Icon
              style={{ marginLeft: 290,marginTop:10  }}
              name='cancel'
              type='material'
              color='black'
              size={28}
              onPress={()=>{this.setModalVisible(!this.state.modalVisible)
              }}
            />
                  <View style={{
                    flex: 1, width: Dimensions.get('window').width - 30, margin: 10,
                    justifyContent: 'flex-end', borderColor: 'black', borderWidth: 1
                  }}>
                               
                    <Camera
                      ref={ref => { this.camera = ref; }}
                      style={{ flex: 1 }}
                      type={this.state.type}>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: 'transparent',
                          flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                          style={{
                            flex: 0.2,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                          }}
                          onPress={() => {
                            this.setState({
                              type: this.state.type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back,
                            });
                          }}>
                          <Text
                            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            {' '}Flip{' '}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.btnSnap}
                          style={{
                            flex: 0.2,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            marginLeft: 90
                          }}>
                          <Icon
                            style={{}}
                            reverse
                            name='add-a-photo'
                            type='material'
                            color='#35BEB7'
                            size={20}
                          />
                        </TouchableOpacity>

                      </View>
                    </Camera>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.placeHolder}>
                      <Image
                        style={styles.image}
                        source={{ uri: this.state.photoUri }}
                      ></Image>

                    </View>
                    <TouchableOpacity onPress={this.btnUpload} disabled={this.state.photoUri == ""||this.state.photoUri == '../assets/icon.png'}
                      style={this.state.photoUri == ""||this.state.photoUri == '../assets/icon.png' ? styles.disabled : styles.uploadButton}>
                      <Icon
                        style={{}}
                        reverse
                        name='file-upload'
                        type='material'
                        color='lightgreen'
                        size={20}

                      />
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>
          </Modal>


          <Icon
            style={{}}
            reverse
            name='add-a-photo'
            type='material'
            color='#8ed0d1'
            size={20}
            onPress={() => {
              this.setModalVisible(true);
            }}
          />

        </View>
      );
    }
  }
}


export default CCModalCamera;