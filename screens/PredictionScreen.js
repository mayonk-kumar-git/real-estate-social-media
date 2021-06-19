import React from "react";
import { View, Text, StyleSheet } from "react-native";

// ---------------------------------------------------------------

// ---------------------------------------------------------------

export default function PredictionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prediction Screen</Text>
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
