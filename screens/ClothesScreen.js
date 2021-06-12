import { Picker } from '@react-native-picker/picker';
import React, { Component,useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import db from "../config.js";
import SelectScreen from './SelectScreen'

export default class ClothesScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      allData:[],
      city:""
    }
  }

  /*getCity(){
    db.collection('selected')
    .onSnapshot((snapshot)=>{
      var city = snapshot.docs.map((doc) => doc.data())
      this.setState({
        city: city
      })
    })
  }*/

 /* getInfo(){
    db.collection('selected')//.where('city','==',Picker.item)
    .onSnapshot((snapshot)=>{
      var city = snapshot.docs.map((doc) => doc.data())
      this.setState({
        city: city
      })
      console.log("CITY"+city)
    })
    db.collection("Mumbai")
    .onSnapshot((snapshot)=>{
      var info = snapshot.docs.map((doc) => doc.data())
      this.setState({
        allData: info
      })
    })
  }
  componentDidMount(){
    //this.getCity()
    this.getInfo()
  }*/

render(){
    return(
      <View style={{flex:1, backgroundColor:'#d35454'}}> 
      <FlatList
      data={this.state.allData}
      renderItem={({item})=>(
        <View style={{borderBottomWidth: 2}}>
          <Text>{"Name: "+item.name}</Text>
          <Text>{"Place: "+item.place}</Text>
          <Text>{"Contact: "+item.contact}</Text>
        </View>
      )}
      keyExtractor = {(item,index)=> index.toString()}
      />
      </View>
    )
  }
}