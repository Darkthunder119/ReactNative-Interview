import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, YellowBox } from "react-native";
import styles from "../../screens/LoginScreen/styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import {firebase} from "../../firebase/config"
import { set } from "react-native-reanimated";

export default function PostItem({validateEmail, extraData}) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const posts = firebase.database().ref().child('posts');
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  YellowBox.ignoreWarnings(["Setting a timer"]);
  const submitData = () =>{
    if (email && validateEmail(email) && phone.length === 10 && address && date && title && description){
        posts.push().set({
            postTitle: `${title.trim()}`,
            address: `${address.trim()}`,
            date: `${date}`,
            phoneNumber: `${phone.trim()}`,
            emailAddress: `${email}`,
            description: `${description.trim()}`
        });
        setTitle("");
        setAddress("");
        setPhone("");
        setEmail("");
        setDescription("");
    } else {
        alert("Please check all the fields carefully! All fields are required.");
    }
  }
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
        <TouchableOpacity style={{...styles.button, marginTop:5}} onPress={()=>setShow(true)}>
          <Text style={styles.buttonTitle}>Pick a Date</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            dateFormat="dayofweek month day year"
          />
        )}
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
        <TouchableOpacity style={styles.button} onPress={submitData}>
          <Text style={styles.buttonTitle}>Post</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
