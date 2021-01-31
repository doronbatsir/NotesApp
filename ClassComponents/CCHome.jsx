import React, { Component } from 'react';
import { Button } from 'react-native';
import { View, Text,StyleSheet,TouchableHighlight,ScrollView } from 'react-native';
import FCCategory from '../FunctionalComponents/FCCategory';
import CCModal from '../ClassComponents/CCModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CCHome extends Component {
  
    constructor(props){
        super(props);
        this.state={
            categoriesArr:[],
            notesCount:0
        };
    }

    componentDidMount=()=>{
      console.log("componentDidMount");
      this.load();
      this.props.navigation.addListener('focus',this.load)
    }
    load =async() => {
      console.log("load");
      const value = await AsyncStorage.getItem('Categories');
      if (value !== null) {
        console.log(value);
          this.setState({categoriesArr:JSON.parse(value)})
      }
    }


    addCategory = (categoryName) => {
        let OBJCategory={name:categoryName,notes:[]}
        this.setState({ categoriesArr: [...this.state.categoriesArr, OBJCategory] },
            ()=>this.save2Storage())
    }
    save2Storage=async()=>{
      try {
          await AsyncStorage.setItem(
            'Categories',
            JSON.stringify(this.state.categoriesArr),async()=>{
                const value = await AsyncStorage.getItem('Categories');
                if (value !== null) {
                  console.log(value);
                }
                else{
                    console.log("null!!");
                }
            }
          );
        } catch (error) {
            console.log("errrrrnull!!");
        }
    }
    deleteFromArr = (index) => {
      newArr = this.state.categoriesArr;
      newArr.splice(index, 1)
      this.setState({ categoriesArr: newArr })
      this.save2Storage();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop:40,fontSize:30,fontWeight:'bold'}}>My Notes</Text>
               <ScrollView style={styles.centeredView}>
               {this.state.categoriesArr.length!==0 ? this.state.categoriesArr.map((category,index) => 
               <FCCategory key = {index} index={index} name = {category.name} 
               amount = {category.notes.length} notes={category.notes} deleteCategory={this.deleteFromArr}/>):[]}
              </ScrollView>
               <CCModal sendToHome={this.addCategory}/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    centeredView: {
        height:360,
        marginTop: 0
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
