import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import db from "../config.js";
import { Value } from "react-native-reanimated";



export default class SelectScreen2 extends Component{
  constructor(){
    super()
    this.state={
      city:"",
      allData:[]
    }
  }
  updateCity(){
    db.collection("selected").doc('1').update({
      city: this.state.city
    });
  }

  getInfo(){
    db.collection('selected')
    .onSnapshot((snapshot)=>{
      var city = snapshot.docs.map((doc) => doc.data())
      this.setState({
        city: city
      })
      console.log("CITY"+city)
    })
    db.collection("+value+")
    .onSnapshot((snapshot)=>{
      var info = snapshot.docs.map((doc) => doc.data())
      this.setState({
        allData: info
      })
    })
  }
  componentDidMount(){
    this.updateCity()
    this.getInfo()
  }
  showInfo(){
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
        <TouchableOpacity 
        style={{backgroundColor:'#14519b',width:150,height:30,borderColor:'black',borderWidth:4,borderRadius:10}}
        onPress={() =>{this.updateCity(),this.showInfo()/*,this.props.navigation.navigate("ClothesScreen")*/}}
        >
          <Text style={{fontSize:15,fontWeight:"bold",alignSelf:'center'}}>Search</Text>
        </TouchableOpacity>
        <View>
        
      </View>
      </View>      
    </View>
  );
}
}