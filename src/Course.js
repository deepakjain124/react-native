import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { foods } from "./api/Food";

const Course = ({ navigation }) => {
  const foodCard = ({ item }) => {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.foodcontainer}>
          <View>
            <Image
              style={styles.foodimage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>{item.description}</Text>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => navigation.navigate("statedetails")}
            >
              <Text style={styles.buttontext}>State Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={foods}
      renderItem={foodCard}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({
  foodimage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  maincontainer: {
    paddingHorizontal: 20,
  },
  foodcontainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.9)",
    textAlign: "start",
    borderRadius: 5,
    shadowColor: "grey",
    textShadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
mainHeader:{
  fontSize:22,
  color:"#344055",
  textTransform:"uppercase",
  // fontWeight:500,
  paddingBottom:15,
  textAlign:"center",
  fontFamily:" Nunito_700Bold"
},
description:{
  fontFamily:"JosefinSans_400Regular",
  textAlign:"left",
  paddingBottom:15,
  lineHeight:20,
  fontSize:16,
  color:"#7d7d7d",
  // height:50,
  // overflow:"scroll"
},
buttoncontainer:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  marginTop:10
},
buttonstyle:{
  backgroundColor:"#809fff",
borderRadius:5,
  paddingVertical:10,
  paddingHorizontal:20,
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
},
buttontext:{
  fontSize:20,
  color:"#eee",
  fontFamily:"JosefinSans_500Medium",
  textTransform:"capitalize"
}
});

export default Course;
