import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

// ---------------------------------------------------------------

// ---------------------------------------------------------------
import { InputWrapper, InputField } from "../styles/AddPost";
// ---------------------------------------------------------------

export default function AppPostScreen() {
  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField
          placeholder="What's in your mind..."
          multiline
          numberOfLines={4}
        />
      </InputWrapper>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={() => console.log("Take photo")}
        >
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photos"
          onPress={() => {
            console.log("choose Photos");
          }}
        >
          <Icon name="md-image-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
