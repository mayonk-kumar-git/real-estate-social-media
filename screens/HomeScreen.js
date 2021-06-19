import React from "react";
import { View, Text, StyleSheet } from "react-native";

// ---------------------------------------------------------------
import FormButton from "../components/FormButton";
// ---------------------------------------------------------------

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => {
          alert("Logout");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});
