import React, { useState } from "react";
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
    "Lato-Regular": {
      uri: require("../assets/font/Lato-Regular.ttf"),
      display: Font.FontDisplay.FALLBACK,
    },
    "Lato-Italic": {
      uri: require("../assets/font/Lato-Italic.ttf"),
      display: Font.FontDisplay.FALLBACK,
    },
  });
}
//Default Export------------------------------------------------------------
export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>
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
      <FormInput
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => alert("sign up button clicked")}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert("Terms of service");
          }}
        >
          <Text style={{ ...styles.color_textPrivate, color: "#e88832" }}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> ans </Text>
        <TouchableOpacity
          onPress={() => {
            alert("Privacy Policy");
          }}
        >
          <Text style={{ ...styles.color_textPrivate, color: "#e88832" }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      <SocialButton
        buttonTitle="Sign Up with FaceBook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {
          alert("facebook Button clicked");
        }}
      />

      <SocialButton
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {
          alert("google Button clicked");
        }}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>
          Already have an account? Sign In
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
    padding: 30,
    marginTop: -50
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
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    // fontFamily: "Lato-Regular",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    // fontFamily: "Lato-Regular",
    color: "grey",
  },
});
