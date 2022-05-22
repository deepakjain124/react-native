import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import Flatlist from "./screen/Flatlist";
import LoginForm from "./screen/LoginForm";
import Netflixcard from "./screen/Netflixcard";
import Ourbutton from "./screen/Ourbutton";
import Scrolleffect from "./screen/Scrolleffect";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [text, setText] = useState("");
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginForm}/>
          <Stack.Screen name="scroll" component={Scrolleffect}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    padding: 37,
  },
  imgstyle: {
    alignContent: "center",
    height: 200,
    marginTop: 10,
  },
  textstyle: {
    fontWeight: "bolder",
    fontSize: 25,
    textAlign: "center",
  },
});
