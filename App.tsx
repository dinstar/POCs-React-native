import React from "react";
import { Button, LogBox, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const
  Stack = createNativeStackNavigator();

const
  HomeScreen = ({ navigation }) =>
    <View style={{padding:50}}>
      <Button title="Go to Welcome" onPress={() => navigation.navigate("Welcome")} />
    </View>,

  WelcomeScreen = ({ navigation }) =>
    <View style={{padding:50}}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>,

  App = () =>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
  </NavigationContainer>;

export default App;
