import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// ---------------------------------------------------------------------------
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
// ---------------------------------------------------------------------------

//declaring custom font------------------------------------------------
async function loadFonts() {
  await Font.loadAsync({
    "Lato-BoldItalic": {
      uri: require("../assets/font/Lato-BoldItalic.ttf"),
      display: Font.FontDisplay.FALLBACK,
    },
    "Lato-Italic": {
      uri: require("../assets/font/Lato-Italic.ttf"),
      display: Font.FontDisplay.FALLBACK,
    },
    "Lato-Regular": {
      uri: require("../assets/font/Lato-Regular.ttf"),
      display: Font.FontDisplay.FALLBACK,
    },
  });
}
//Default Export------------------------------------------------------------
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    loadFonts;
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Social App</Text>
      <FormInput
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={() => alert("sign in button clicked")}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert("forgot passord pressed")}
      >
        <Text style={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign In with FaceBook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {
          alert("facebook Button clicked");
        }}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {
          alert("google Button clicked");
        }}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
//Styling------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:30,
    paddingTop:40
  },
  logo: {
    height: 150,
    width: 140,
    resizeMode: "cover",
    marginBottom: 20,
  },
  text: {
    // fontFamily: "Lato-BoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    // fontFamily: "Lato-Regular",
  },
});
