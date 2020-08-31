import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import styles from "../../screens/HomeScreen/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { firebase } from "../../firebase/config";

export default function Profile({ extraData, signOut, emailVerificationFirebase }) {
  const user = firebase.auth().currentUser;
  const [userEmail, setUserEmail] = useState(extraData.emailVerified);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.emailVerified) {
      setLoading(false);
      setUserEmail(true)
    } else setLoading(false);
  }, []);

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
    <View style={styles.container}>
      <Text style={styles.profileText}>Welcome {user.email.split("@")[0]}</Text>
      <Text style={styles.profileText}>
        Email : {user.email} {userEmail ? "" : "*"}
      </Text>
      {!userEmail ? (
        <>
          <Text>* please verify Email</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={emailVerificationFirebase}
          >
            <Text style={{ color: "#FFF" }}>Verify Email</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Email is Verified</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={{ color: "#FFF" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
