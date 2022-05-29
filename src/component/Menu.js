import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menucontainer}>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("States")}
      >
        {/* <Text>Course</Text> */}
        <Image
          style={styles.iconstyle}
          source={{
            uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-training-dance-flaticons-flat-flat-icons.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("Student")}
      >
        <Image
          style={styles.iconstyle}
          source={{
            uri: "https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-student-back-to-school-tulpahn-outline-color-tulpahn.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconstyle}
          source={{
            uri: "https://img.icons8.com/avantgarde/344/experimental-about-avantgarde.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.iconstyle}
          source={{
            uri: "https://img.icons8.com/external-nawicon-flat-nawicon/344/external-contact-communication-nawicon-flat-nawicon.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menucontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconstyle: {
    width: "100%",
    height: 40,
    aspectRatio: 1,
  },
});
export default Menu;
