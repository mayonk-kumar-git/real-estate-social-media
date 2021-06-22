import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

// ---------------------------------------------------------------

// ---------------------------------------------------------------
import { InputWrapper, InputField, AddImage } from "../styles/AddPost";
// ---------------------------------------------------------------

export default function AppPostScreen() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style={styles.container}>
      <InputWrapper>
        {image !== null ? <AddImage source={{ uri: image }} /> : null}
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
            pickImage();
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
