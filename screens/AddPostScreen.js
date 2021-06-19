import React from "react";
import { View, Text, StyleSheet } from "react-native";

// ---------------------------------------------------------------

// ---------------------------------------------------------------

export default function AppPostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What's in your mind... </Text>
      <Text style={{color:"grey", fontSize:15, textAlign:"center"}}>Need not post everything that comes to your mind</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e64e515",
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
