import React, { Component } from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import FCCategory from '../FunctionalComponents/FCCategory';
import CCModal from '../ClassComponents/CCModal';
//import { AsyncStorage } from 'react-native-async-storage/async-storage';
  

export default class CCHome extends Component {
  
    constructor(props){
        super(props);
        this.state={
            categoriesArr:[]
        };

        //this.apiUrl ='http://localhost:56451/api/Categories/';
    }
 
    //     componentDidMount =() =>
    //     {
    //     console.log('GETstart');
    //     fetch(this.apiUrl,
    //       {
    //         method: 'GET',
    //         headers: new Headers({
    //           'Content-Type': 'application/json; charset=UTF-8',
    //           'Accept': 'application/json; charset=UTF-8'
    //         })
    //       })
    //       .then((res)=>{
    //          console.log('res=', res);
             
    //          console.log('res.ok', res.ok);
    //         return res.json();
    //       })
    //       .then(
    //         (result) => {
    //             console.log("fetch btnFetchGetRec= ", result);
    //             result.map(rec => console.log(rec.Name));
    //             //console.log('result[0].FullName=', result[0].Name);
    //             this.setState({categoriesArr:result});

    //           },
    //         (error) => {
    //           console.log("err post=", error);
    //         });
    //     console.log('end');
    // }

    addCategory = (categoryName) => {
        this.setState({ categoriesArr: [...this.state.categoriesArr, categoryName] },
            ()=>console.log(this.state.categoriesArr))
        
    //     try {
    //       await AsyncStorage.setItem(
    //         'Categories',
    //         JSON.stringify(this.state.categoriesArr)
    //       );
    //     } catch (error) {
    //       // Error saving data
    //     }
       }
    render() {
        return (
            <View>
               {/* {this.state.categoriesArr.length!==0 ? this.state.categoriesArr.map((category,index) => <FCCategory key = {index} name = {category} amount = "3"/>):<Text>null</Text>} */}
               {<Button title = "+++" onPress={this.btnAddCategory}/>}
               <CCModal sendToHome={this.addCategory}/>

        </View>
        )
    }
}
