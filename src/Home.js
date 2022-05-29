import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./component/Menu";

const Home = (props) => {
  const description =
    "One of India's Biggest food app to know about HINDUSTAN dishes.";
  return (
    <View style={styles.maincontainer}>
      <View style={styles.hometop}>
        <Image
          style={styles.headerimage}
          resizeMode="center"
          source={require("../assets/download.jpg")}
        />
        <Text style={styles.mainheader}>Welcome To</Text>
        <Text
          style={[
            styles.mainheader,
            { fontSize: 33, color: "#4c5dab", marginTop: 0 },
          ]}
        >
          {props.channelname}
        </Text>
        <Text style={styles.parastyle}>{description}</Text>
      </View>
      <View style={styles.menustyle}>
        <Menu />
        <View style={[styles.inlinestyle, { marginVertical: 10 }]}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  hometop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerimage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: "40px",
  },
  mainheader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  parastyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7",
    marginTop: 30,
    lineHeight: 26,
  },
  inlinestyle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
});
export default Home;
