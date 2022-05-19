import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Flatlist = () => {
  const names = [
    { key: "1", name: "Deepak" },
    { key: "2", name: "Jain" },
    { key: "3", name: "Sanchit" },
    { key: "4", name: "Vinayak" },
    { key: "5", name: "Chetan" },
    { key: "6", name: "Rajat" },
    { key: "7", name: "Vikas" },
  ];
  return (
    <FlatList style={style.liststyle}
      keyExtractor={(index) => {
        return index.key;
      }}
      // horizontal //for horixontal view
      data={names}
    //   numColumns={2}
    inverted
      showsHorizontalScrollIndicator={false} //remove scrollbar from bottom
      renderItem={(element) => {
        return <Text style={style.textstyle}>{element.item.name}</Text>;
      }}
    />
  );
};
const style = StyleSheet.create({
  textstyle: {
    fontSize: 30,
    padding: "25px",
    margin: "5px",
    textAlign:"center",
    backgroundColor: "skyblue",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "red",
  },
  liststyle:{
      marginTop:"20px"
  }
});
export default Flatlist;
