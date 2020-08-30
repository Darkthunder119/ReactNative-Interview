import React from "react";
import {View, Text, Button} from "react-native"
import styles from '../../screens/HomeScreen/styles';

export default function Profile(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Welcome {props.extraData.split("@")[0]}</Text>
      <Button title="Sign Out" style={styles.button} onPress={props.signOut} />
    </View>
  );
}
