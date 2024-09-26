import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

import { welcomeScreen as st } from "../assets/styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={st.container}>
      <Text style={st.title}>Welcome to Firebase :</Text>

      <TouchableOpacity
        style={st.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={st.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;