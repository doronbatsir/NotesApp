import React from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Image, TouchableOpacity,ImageBackground } from 'react-native';
import styles from '../pageStyle';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';

export default class CameraPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photoUri: '../assets/icon.png',
      uplodedPicUri: { uri: '../assets/icon.png' }
    }
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
    let img = this.state.photoUri;
    let imgName = 'imgFromCamera.jpg';
    //this.imageUpload(img, imgName);
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.Content}>
            <View style={{ alignItems: 'center' }}>
              <View style={{
                flex: 1, width: Dimensions.get('window').width-30, margin: 10,
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
                  marginLeft:90
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
              <View style={{flexDirection:'row'}}>
              <View style={stylesCP.placeHolder}>
                <Image
                  style={stylesCP.image}
                  source={{ uri: this.state.photoUri }}
                ></Image>

              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.goBack()}
                style={{
                  flex: 0.1,
                  marginTop:30,
                  marginRight:30
                  //alignSelf: 'flex-end',
                  //alignItems: 'flex-end',
                  //marginLeft:90
                }}>
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
      );
    }
  }
}


const stylesCP = StyleSheet.create({
  placeHolder: {
    //flex: 1,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    height:100
  },
  image: {
    flex: 1,
    //width: 300
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
     height: '100%',
}
});