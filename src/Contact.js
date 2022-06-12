import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({navigation}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [agree, setagree] = useState(false);

  const submit=()=>{
    if(!name && !email && !mobile && !message){
alert("plase fill all the fields")
    }else{
      alert(`Thank you ${name}`)
      navigation.navigate("Home")
    }
  }
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainheader}>Get Your Fav. Food at your doorstep</Text>

      <Text style={styles.description}>
        you can reach us anytime via tomatofood@get.com
      </Text>
      <View style={styles.inputcontainer}>
        <Text style={styles.Labels}>Enter your name</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder={"Tomato food"}
          value={name}
          onChangeText={(userdata) => setname(userdata)}
        />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.Labels}>Enter your email</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder={"Tomatofood@get.com"}
          value={email}
          onChangeText={(email) =>setemail(email) }
        />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.Labels}>Enter your mobile</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder={"8209086250"}
          value={mobile}
          onChangeText={(mobile) => setmobile(mobile)}
        />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.Labels}>How can i help you</Text>
        <TextInput
          style={[styles.inputstyle, styles.multiline]}
          placeholder={"Tell us about yourself"}
          // value={0}
          numberOfLines={5}
          multiline={true}
          onChangeText={(message) => setmessage(message)}
        />
      </View>
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => {
            setagree(!agree);
          }}
          color={agree ? "#4630eb" : undefined}
        />
        <Text style={styles.checktext}>
          I have read and agreed with the T&C
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: agree ? "#4630eb" : "grey" }]}
        onPress={submit}
        disabled={!agree}
      >
        <Text style={styles.buttontext}>Contact US</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainheader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_400Regular",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputcontainer: {
    marginTop: 20,
  },
  Labels: {
    fontWeight: "bold",
    color: "#7d7d7d",
    paddingBottom: 3,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiline: {
    paddingVertical: 4,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checktext: {
    marginLeft: 10,
    color:"#7d7d7d",
    fontFamily:"JosefinSans_300Light"
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttontext: {
    color: "#eee",
  },
});

export default Contact;
