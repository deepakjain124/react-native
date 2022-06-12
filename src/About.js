import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Linking } from "react-native-web";

const About = () => {
  return (
    <View style={styles.aboutcontainer}>
      <Text style={styles.mainheader}>Deepak Jain</Text>
      <Text style={styles.parastyle}>
        I am a React Js and React Native Developer
      </Text>

      <View>
        <Image
          style={styles.imgstyle}
          source={"../assets/bihar.jpg"}
          resizeMode
        />
      </View>
      <View style={styles.aboutlayout}>
        <Text style={styles.aboutsubheader}>About Me</Text>
        <Text style={[styles.parastyle, styles.aboutpara]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <Text style={styles.mainheader}>Follow me on social network</Text>
      <View style={styles.menucontainer}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => Linking.openURL()}
        >
          <Image
            style={styles.iconstyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => Linking.openURL()}
        >
          <Image
            style={styles.iconstyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => Linking.openURL()}
        >
          <Image
            style={styles.iconstyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  aboutcontainer: {
    display: "flex",
    alignItems: "center",
  },
  imgstyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainheader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
    lineHeight: 30,
  },
  parastyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutlayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutsubheader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutpara: {
    color: "#fff",
  },
  menucontainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginBottom:20,
    justifyContent: "space-evenly",
  },
  iconstyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
