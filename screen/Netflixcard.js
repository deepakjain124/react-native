import React from "react";
import { Button, Image, StyleSheet, Text, View,Linking } from "react-native";
import { Paragraph } from "react-native-paper";

const Netflixcard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagestyle}
        source={require("../assets/test.avif")}
      />
      <Text style={styles.textstyle}>All Of us are Bad</Text>
      <Paragraph style={styles.Paragraph}>
        A React component for displaying different types of images, including
        network images, static resources, temporary local images, and images
        from local disk, such as the camera roll. This example shows fetching
        and displaying an image from local storage as well as one from network
        and even from data provided in the 'data:' uri scheme.
      </Paragraph>
        <Button style={styles.button} color="purple" title="click me" onPress={()=>Linking.openURL("https://reactnative.dev/docs/image")}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    border: "1px solid black",
    margin: 10,
    padding:10
  },
  textstyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  imagestyle: {
    alignContent: "center",
    height: 200,
  },
  Paragraph: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default Netflixcard;
