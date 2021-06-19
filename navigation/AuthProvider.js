import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import * as firebase from "firebase";

// -------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCTJMFM3C3dnp81AhR72AOBJA0uGyBgsnQ",
  authDomain: "social-app-cf3a8.firebaseapp.com",
  databaseURL: "https://social-app-cf3a8-default-rtdb.firebaseio.com/",
  projectId: "social-app-cf3a8",
  storageBucket: "social-app-cf3a8.appspot.com",
  messagingSenderId: "190778601669",
  appId: "1:190778601669:web:0ed30cf6980dff12d9c0ac",
};

export const fireBase = firebase.initializeApp(firebaseConfig);
// -------------------------------------------------------------------------

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await fireBase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await fireBase
              .auth()
              .createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await fireBase.auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
