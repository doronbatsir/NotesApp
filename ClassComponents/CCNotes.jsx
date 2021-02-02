import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, ScrollView,ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CCModalAddNote from '../ClassComponents/CCModalAddNote';
import FCNote from '../FunctionalComponents/FCNote';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements'

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
  renderBack=()=>{
    return  <Icon
    style={{ alignSelf: 'flex-end' }}
    name='arrow-left'
    type='simple-line-icon'
    color='white'
    size={24}
    onPress={onPress=() => this.props.navigation.navigate('CCHome')}
  />
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/notesimg.jpg')} style={styles.backgroundImage} >
                <Header
                  leftComponent={this.renderBack()}
  centerComponent={{ text:this.props.route.params.name + "-" + this.state.notesArr.length, style: { color: '#fff',fontSize:26,fontWeight:'bold'} }}
  containerStyle={{backgroundColor:'#35BEB7'}}/>

        <ScrollView style={{ height: 490 }}>
          {this.state.notesArr.length !== 0 ? this.state.notesArr.map((note, index) =>
            <FCNote key={index} index={index} title={note.title} content={note.content}
              image={note.image} time={note.time} deleteNote={this.deleteNoteArr} />) : []}
        </ScrollView>

        <CCModalAddNote sendToNotes={this.getFromAddNote} navigation={this.props.navigation} />
        </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    width: '100%',
     height: '100%',
}
});