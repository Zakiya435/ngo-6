import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import db from "../config.js";



export default class SelectScreen extends Component{
  constructor(){
    super()
    this.state={
      city:""
    }
  }
  
  updateCity(abc){
    db.collection("selected").doc('1').update({
      city: abc
    });
  }
  render(){
  return (
    <View style={{flex:1,backgroundColor:'#d35454', alignItems:'center', paddingTop:30}}>
      <View>
        <Text style={{fontWeight:'bold',fontSize:20}}>Select your city:</Text>
      </View>
      <View>
      <Picker
        style={{ height: 50, width: 150}}
        onValueChange={(value) => this.setState({city:value})}
      >
        <Picker.Item label="---" value="---" />
        <Picker.Item label="Delhi" value="Delhi" />
        <Picker.Item label="Mumbai" value="Mumbai" />
        <Picker.Item label="Ahmedabad" value="Ahmedabad" />
        <Picker.Item label="Hyderabad" value="Hyderabad" />
        <Picker.Item label="Kolkata" value="Kolkata" />        
        <Picker.Item label="Chennai" value="Chennai" />
      </Picker>
      </View>
      <View style={{paddingTop:350}}>
        <Text>{this.state.city}</Text>
        <TouchableOpacity 
        style={{backgroundColor:'#14519b',width:150,height:30,borderColor:'black',borderWidth:4,borderRadius:10}}
        onPress={() =>{this.updateCity(this.state.city),this.props.navigation.navigate("ClothesScreen")}}
        >
          <Text style={{fontSize:15,fontWeight:"bold",alignSelf:'center'}}>Search</Text>
        </TouchableOpacity>
      </View>      
    </View>
  );
}
}