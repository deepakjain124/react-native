import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import Checkbox from "expo-checkbox";

const LoginForm = ({ navigation }) => {
  const [agree, setagree] = useState(false);
  const [name, setname] = useState("");
  const [Password, setpassword] = useState("");

  const checkdisability = () => {
    if (agree && name !== "" && Password !== "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Login Form</Text>
      <Text style={Styles.desc}>
        You can reach us anytime via deepak@gmail.com
      </Text>
      <View style={Styles.inputcontainer}>
        <Text style={Styles.label}>Enter your name</Text>
        <TextInput
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          style={Styles.input}
          placeholder="Enter your Name"
        />
        <Text style={Styles.label}>Enter your Password</Text>
        <TextInput
          style={Styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={Password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Enter your Password"
        />
      </View>
      <View style={Styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => {
            setagree(!agree);
          }}
          color={agree ? "#4630eb" : undefined}
        />
        <Text style={Styles.checktext}>
          I have read and agreed with the T&C
        </Text>
      </View>
      <TouchableOpacity style={Styles.button}>
        <Button
          title="LogIn"
          onPress={() => {
            setname(""), setagree(false), setpassword("");
            navigation.navigate("scroll");
          }}
          disabled={checkdisability()}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 30,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: "bolder",
  },
  desc: {
    textAlign: "center",
    fontSize: 18,
  },
  inputcontainer: {
    width: "100%",
  },
  label: {
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 8,
    outline: "none",
    marginTop: 10,
    fontFamily: "regular",
    fontSize: 18,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  checktext: {
    marginLeft: 10,
  },
  button: {
    width: "120%",
    paddingHorizontal: 50,
    color: "green",
    marginTop: 15,
  },
});

export default LoginForm;
