import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// ---------------------------------------------------------------
import PredictionInput from "../components/PredictionInput";
// ---------------------------------------------------------------

export default function PredictionScreen() {
  const [sqft, setSqft] = useState(0.0);
  const [bath, setBath] = useState(0);
  const [bhk, setBhk] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prediction Screen : {sqft} {bath} {bhk}</Text>
      <PredictionInput
        labelValue={sqft == 0.0 ? "":String(sqft)}
        placeholderText="Total Square Feet"
        keyboardType="numeric"
        onChangeText={(text) => {
          text == "" ? setSqft(0.0) : setSqft(parseFloat(text));
        }}
      />
      <PredictionInput
        labelValue={bath == 0 ? "":String(bath)}
        placeholderText="Number of Bathrooms"
        keyboardType="numeric"
        onChangeText={(text) => {
          text == "" ? setBath(0) : setBath(parseInt(text));
        }}
      />
      <PredictionInput
        labelValue={bhk == 0 ? "":String(bhk)}
        placeholderText="Number of BHK"
        keyboardType="numeric"
        onChangeText={(text) => {
          text == "" ? setBhk(0) : setBhk(parseInt(text));
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
