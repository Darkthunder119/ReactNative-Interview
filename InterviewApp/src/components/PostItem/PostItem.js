import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import styles from '../../screens/HomeScreen/styles';


export default function PostItem() {
  return (
    <View style={styles.container}>
      <Text>Hello Form</Text>
    </View>
  );
}
