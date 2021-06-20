import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// --------------------------------------------------------------

// ---------------------------------------------------------------
import PredictionInput from "../components/PredictionInput";
import { windowWidth, windowHeight } from "../utils/Dimentions";
// ---------------------------------------------------------------

export default function PredictionScreen() {
  const [sqft, setSqft] = useState(0.0);
  const [bath, setBath] = useState(0);
  const [bhk, setBhk] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/predict-price.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Prediction Screen : {sqft} {bath} {bhk}
      </Text>
      <PredictionInput
        labelValue={sqft == 0.0 ? "" : String(sqft)}
        placeholderText="Total Square Feet"
        keyboardType="numeric"
        onChangeText={(text) => {
          text == "" ? setSqft(0.0) : setSqft(parseFloat(text));
        }}
      />
      <PredictionInput
        labelValue={bath == 0 ? "" : String(bath)}
        placeholderText="Number of Bathrooms"
        keyboardType="numeric"
        onChangeText={(text) => {
          text == "" ? setBath(0) : setBath(parseInt(text));
        }}
      />
      <PredictionInput
        labelValue={bhk == 0 ? "" : String(bhk)}
        placeholderText="Number of BHK"
        keyboardType="numeric"
        onChangeText={(text) => {
          text == "" ? setBhk(0) : setBhk(parseInt(text));
        }}
      />
      <View style={styles.predictionContainer}>
        <Text style={styles.predictionText}>Price</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DEE5F6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  text: {
    fontSize: 30,
    color: "#333333",
    marginBottom: 25,
  },
  logo: {
    height: 150,
    width: 190,
    resizeMode: "cover",
    marginBottom: 20,
  },
  predictionContainer: {
    marginTop: 40,
    marginBottom: 10,
    width: "50%",
    height: windowHeight / 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8EEC90",
  },
  predictionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
