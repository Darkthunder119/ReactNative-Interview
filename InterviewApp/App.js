import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, HomeScreen, RegistrationScreen } from "./src/screens";
import { decode, encode } from "base-64";
import { firebase } from "./src/firebase/config";
import { View, ActivityIndicator } from "react-native";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedOut, setIsSignedOut] = useState(false);
  const [user, setUser] = useState(null);

  const signOut = () => {
    firebase.auth().signOut();
    setIsSignedOut(true);
    setUser(null);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((cred) => {
      if (cred) {
        setLoading(false);
        setUser(cred);
      } else setLoading(false);
    });
  }, []);

  const validateEmail = (email) => {
    const expression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return expression.test(email.trim().toLowerCase());
  };
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#788eec"
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => (
              <HomeScreen
                {...props}
                extraData={user}
                signOut={signOut}
                validateEmail={validateEmail}
              />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login">
              {(props) => (
                <LoginScreen {...props} validateEmail={validateEmail} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Registration">
              {(props) => (
                <RegistrationScreen {...props} validateEmail={validateEmail} />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
