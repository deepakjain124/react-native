import React from "react";
import { Text } from "react-native-paper";
import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native";
import { films } from "./Films";
const Scrolleffect = () => {
 
  return (
    <View>
      <Text style={{textAlign:"center",fontWeight:"bolder",marginBottom:30,fontSize:25}}>Top 10 Salman movies</Text>
      <FlatList
        data={films}
        horizontal
        O
        showsHorizontalScrollIndicator={false}
        keyExtractor={(index) => index.key}
        renderItem={(data) => {
          return (
            <View style={Styles.container}>
              <Text style={Styles.Text}>Name:{data.item.name}</Text>
              <Text style={Styles.Text}>Actor:{data.item.actor}</Text>
              <Text style={Styles.Text}>Year:{data.item.year}</Text>
              <Text style={Styles.Text}>Genere:{data.item.genere}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    border: "1px solid black",
    marginRight:20,
    paddingHorizontal:30,
    paddingVertical:30,
    backgroundColor:"black",
  },
  Text:{
    color:'white',
    fontWeight:"bold",
    lineHeight:30

  }
});

export default Scrolleffect;
