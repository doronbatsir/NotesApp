import React, { Component } from 'react';
import { Button } from 'react-native';
import { View, Text,StyleSheet,TouchableHighlight,ScrollView,ImageBackground } from 'react-native';
import FCCategory from '../FunctionalComponents/FCCategory';
import CCModal from '../ClassComponents/CCModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from 'react-native-elements'


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
              <ImageBackground source={require('../assets/notesimg.jpg')} style={styles.backgroundImage} >
        
              <Header
  centerComponent={{ text: 'MY NOTES', style: { color: '#fff',fontSize:26,fontWeight:'bold'} }}
  containerStyle={{backgroundColor:'#35BEB7',marginBottom:20}}/>
                
               <ScrollView style={styles.centeredView}>
               {this.state.categoriesArr.length!==0 ? this.state.categoriesArr.map((category,index) => 
               <FCCategory key = {index} index={index} name = {category.name} 
               amount = {category.notes.length} notes={category.notes} deleteCategory={this.deleteFromArr}/>):[]}
              </ScrollView>
               <CCModal sendToHome={this.addCategory}/>
               </ImageBackground>
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
      },
      backgroundImage: {
        flex: 1,
        // width: undefined,
        // height: undefined,
        // flexDirection: 'column',
        // backgroundColor:'transparent',
        // justifyContent: 'flex-start',
        width: '100%', height: '100%',
        
    
    }
  });
