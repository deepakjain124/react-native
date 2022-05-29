import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-Stack";
import Home from "./src/Home";
import About from "./src/About";
import Course from "./src/Course";
import Userdata from "./src/Userdata";
import Contact from "./src/Contact";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import {
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
const App = () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        {/* <stack.Screen name="Home" component={Home}/> */}
        <stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} channelname="Tomato App" />}
        </stack.Screen>
        <stack.Screen
          options={{
            headerBackTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "States",
            headerTitleAlign: "center",
          }}
          name="States"
          component={Course}
        />
        <stack.Screen
          options={{
            headerBackTitleStyle: { fontSize: 25 ,fontFamily: "Nunito_600SemiBold",},
            headerTitle: "StudentData",
            headerTitleAlign: "center",
          }}
          name="Student"
          component={Userdata}
        />
        <stack.Screen
          options={{
            headerBackTitleStyle: { fontSize: 25,fontFamily: "Nunito_600SemiBold", },
            headerTitleAlign: "center",
          }}
          name="About"
          component={About}
        />
        <stack.Screen
          options={{
            headerBackTitleStyle: { fontSize: 25,fontFamily: "Nunito_600SemiBold", },
            headerTitleAlign: "center",
          }}
          name="Contact"
          component={Contact}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
