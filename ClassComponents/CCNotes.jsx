import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CCModalAddNote from '../ClassComponents/CCModalAddNote';
import FCNote from '../FunctionalComponents/FCNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CCNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesArr: props.route.params.notes
        };
    }
    getFromAddNote = (note) => {
        this.setState({ notesArr: [...this.state.notesArr, note] },
            () => this.GetFromStorage())
    }
    GetFromStorage=async()=>{
        const value = await AsyncStorage.getItem('Categories');
        if (value !== null) {
          console.log("GetFromStorage: "+value);
          let categoriesArrNew=JSON.parse(value)
          console.log("newarr1111: ",JSON.parse(value));
          categoriesArrNew.forEach(category => {
            {if(category.name===this.props.route.params.name)
              category.notes=this.state.notesArr
              }
          });
          console.log("newarr: ",categoriesArrNew);
          this.Save2Storage(categoriesArrNew);
      }
    }
    Save2Storage=async(categoriesArrNew)=>{
      try {
          await AsyncStorage.setItem('Categories',
             JSON.stringify(categoriesArrNew)
             ,async()=>{
                const value1 = await AsyncStorage.getItem('Categories');
                if (value1 !== null) {
                  console.log(value1);
                }
                else{
                    console.log("null!!");
                }
            }
          );
        } catch (error) {
            console.log("errrrrnull!NOTES11!");
        }
    } 
  
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 50 }}> {this.props.route.params.name}</Text>
                <Text>{this.props.route.params.notes.length}</Text>
                
                <View style={styles.centeredView}>
               {this.state.notesArr.length!==0 ? this.state.notesArr.map((note,index) => 
               <FCNote key = {index} title = {note.title} content = {note.content}/>):[]}
              </View>

                <CCModalAddNote sendToNotes={this.getFromAddNote} />
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('CCHome')}>
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
    },
    centeredView: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 100
    }
});