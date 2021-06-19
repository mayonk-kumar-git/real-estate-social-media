import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

// ---------------------------------------------------------------
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";
// ---------------------------------------------------------------

export default function HomeScreen() {
  const { logout, user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>User Id: {user.uid}</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => {
          logout();
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
