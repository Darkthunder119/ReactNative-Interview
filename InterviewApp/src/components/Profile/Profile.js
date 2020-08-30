import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../../screens/HomeScreen/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Profile({ extraData, signOut }) {
  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>
        Welcome {extraData.email.split("@")[0]}
      </Text>
      <Text style={styles.profileText}>
        Email : {extraData.email} {extraData.emailVerified ? "" : "*"}
      </Text>
      {!extraData.emailVerified ? (
        <>
          <Text>* please verify Email</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color:"#FFF"}}>Verify Email</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Email is Verified</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={{color:"#FFF"}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
