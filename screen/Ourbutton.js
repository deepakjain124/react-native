import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const Ourbutton = () => {
  return (
    <View>
      <Button
        title="Click me"
        color="green"
        onPress={() => Alert.alert("Button pressed")}
        // disabled // to disable the button
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ourbutton;
