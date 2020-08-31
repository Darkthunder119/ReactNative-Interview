import React, {useState, useEffect} from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import styles from "../../screens/LoginScreen/styles";

export default function PostItem() {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setTitle(text)}
          value={title}
          underlineColorAndroid="transparent"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          textContentType="fullStreetAddress"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setAddress(text)}
          value={address}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          keyboardType="number-pad"
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setDate(text)}
          value={date}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="description"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setDescription(text)}
          value={description}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          multiline
          numberOfLines={3}
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonTitle}>Post</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
