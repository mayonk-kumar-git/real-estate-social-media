import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { View, Text } from "react-native";

// ----------------------------------------------------------------------------
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext, fireBase } from "./AuthProvider";
// ----------------------------------------------------------------------------

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState(null);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    try {
      const subscriber = fireBase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    } catch (e) {
      setError(String(e));
    }
  }, []);

  //  you can provide a loader over here instead of returning null
  if (initializing)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error ? error : `Loading...`}</Text>
      </View>
    );

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
