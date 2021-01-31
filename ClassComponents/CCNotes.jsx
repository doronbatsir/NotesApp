import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CCModalAddNote from '../ClassComponents/CCModalAddNote';
import FCNote from '../FunctionalComponents/FCNote';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'

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
  GetFromStorage = async () => {
    const value = await AsyncStorage.getItem('Categories');
    if (value !== null) {
      console.log("GetFromStorage: " + value);
      let categoriesArrNew = JSON.parse(value)
      console.log("newarr1111: ", JSON.parse(value));
      categoriesArrNew.forEach(category => {
        {
          if (category.name === this.props.route.params.name)
            category.notes = this.state.notesArr
        }
      });
      console.log("newarr: ", categoriesArrNew);
      this.Save2Storage(categoriesArrNew);
    }
  }
  Save2Storage = async (categoriesArrNew) => {
    try {
      await AsyncStorage.setItem('Categories',
        JSON.stringify(categoriesArrNew)
        , async () => {
          const value1 = await AsyncStorage.getItem('Categories');
          if (value1 !== null) {
            console.log(value1);
          }
          else {
            console.log("null!!");
          }
        }
      );
    } catch (error) {
      console.log("errrrrnull!NOTES11!");
    }
  }
  deleteNoteArr = (index) => {
    newArr = this.state.notesArr;
    newArr.splice(index, 1)
    this.setState({ notesArr: newArr })
    this.GetFromStorage();
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight style={{ marginLeft: 270, marginTop: 40, marginBottom: 10 }}
          onPress={() => this.props.navigation.navigate('CCHome')}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 14 }}> Back</Text>
            <Icon
              style={{ alignSelf: 'flex-end' }}
              name='arrow-right'
              type='simple-line-icon'
              color='black'
              size={14}
            />

          </View>
        </TouchableHighlight>
        

        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
          {this.props.route.params.name + "                       " + this.state.notesArr.length}</Text>

        <ScrollView style={{ height: 490 }}>
          {this.state.notesArr.length !== 0 ? this.state.notesArr.map((note, index) =>
            <FCNote key={index} index={index} title={note.title} content={note.content}
              image={note.image} time={note.time} deleteNote={this.deleteNoteArr} />) : []}
        </ScrollView>

        <CCModalAddNote sendToNotes={this.getFromAddNote} navigation={this.props.navigation} />

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