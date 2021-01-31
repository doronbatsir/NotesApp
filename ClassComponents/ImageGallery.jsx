import React from 'react';
import { Text, View, Button, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import styles from '../pageStyle';
import * as ImagePicker from 'expo-image-picker';

export default class ImageGallery extends React.Component {
    static navigationOptions = {
        title: 'GALLERY',
    };

    constructor(props) {
        super(props);
        this.state = {
            image: null,
        }
    }

    btnOpenGalery = async () => {
        console.log("btnOpenGalery");
        let result = await ImagePicker.launchImageLibraryAsync({
            //allowsEditing: true,
            //aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding"
                style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.textBig}>Gallery Page PG</Text>
                    <Image
                        style={{ alignSelf: 'center', width: 100, height: 100 }}
                        source={require('../assets/icon.png')} />
                    <View style={{ margin: 10, justifyContent: 'flex-start' }}>
                        <Button
                            title="Go to First Page"
                            onPress={() => {
                                this.props.navigation.navigate('FirstPage');
                            }} />
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={{ margin: 20 }}>
                        <Button
                            title="Choose From Galery"
                            onPress={this.btnOpenGalery}
                        />
                    </View>
                    {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </KeyboardAvoidingView >
        );
    }
}