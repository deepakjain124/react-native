import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import {TextInput  } from 'react-native-paper'
import Flatlist from "./screen/Flatlist";
import Netflixcard from "./screen/Netflixcard";
import Ourbutton from "./screen/Ourbutton";


export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={Styles.container} >
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      <Button title="good"></Button>
<Flatlist/>
<Ourbutton/>
<Netflixcard/>
     {/* <Image style={Styles.imgstyle} source={{
       uri:"../deepak/assets/test.avif"
     }
     }/> */}
     <Text style={Styles.textstyle}>This is my image</Text>
     <TouchableOpacity>
     <Image style={Styles.imgstyle} source={
        require("../deepak/assets/test.avif")
     }/>
     </TouchableOpacity>
      
      <StatusBar style="dark" />
    </View>
  );
}

const Styles = StyleSheet.create({
  container :{
    alignContent:'center',
    padding:37,
},
  imgstyle: {
    alignContent:'center',
    height:200,
    marginTop:10
  },
  textstyle:{
    fontWeight:"bolder",
    fontSize:25,
    textAlign:"center"
  }
});
