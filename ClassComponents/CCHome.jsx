import React, { Component } from 'react';
import { Button } from 'react-native';
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native';
import FCCategory from '../FunctionalComponents/FCCategory';
import CCModal from '../ClassComponents/CCModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CCHome extends Component {
  
    constructor(props){
        super(props);
        this.state={
            categoriesArr:[]
        };
    }

    componentDidMount=async()=>{
      console.log("componentDidMount");
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

    render() {
        return (
            <View style={styles.container}>
                <Text>My Notes</Text>
               <View style={styles.centeredView}>
               {this.state.categoriesArr.length!==0 ? this.state.categoriesArr.map((category,index) => 
               <FCCategory key = {index} name = {category.name} amount = {category.notes.length} notes={category.notes}/>):[]}
              </View>
               <CCModal sendToHome={this.addCategory}/>
               <TouchableHighlight
                style={styles.openButton}
                onPress={async() => {
                        try {
                            await AsyncStorage.removeItem('Categories');
                            this.setState({categoriesArr:[]})
                            return true;
                        }
                        catch(exception) {
                            return false;}}}>
                <Text style={styles.textStyle}>clear</Text>
              </TouchableHighlight>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
