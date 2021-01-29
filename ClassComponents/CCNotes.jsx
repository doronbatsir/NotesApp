import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CCModalAddNote from '../ClassComponents/CCModalAddNote';

export default class CCNotes extends Component {
    constructor(props){
        super(props);
        this.state={
            //notesArr:props.route.params.notes.length
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop:50}}> {this.props.route.params.name}</Text>
                <Text>{this.props.route.params.notes.length}</Text>
              {<CCModalAddNote sendToNotes={this.send2Home}/>}
              <TouchableHighlight
               onPress={()=>this.props.navigation.navigate('CCHome')}>
                <Text> Back</Text>
              </TouchableHighlight>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });