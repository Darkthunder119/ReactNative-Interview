import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../screens/HomeScreen/styles";
import { Ionicons } from "@expo/vector-icons";

function SingleItem({ item }) {
  return (
    <View style={styles.specialContainer}>
      <View style={styles.user}>
        <Image
          source={{ uri: `${item.owner.picture}` }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <View style={styles.userText}>
          <Text>{item.owner.firstName}</Text>
          <Text>{item.owner.email}</Text>
        </View>
      </View>
      <Image
        source={{ uri: `${item.image}` }}
        style={{ width: "100%", height: 300, resizeMode: "cover" }}
      />
      <View style={styles.textContainer}>
        {item.tags.map((tag, i) => (
          <Text key={i} style={styles.tags}>
            {tag}
          </Text>
        ))}
        <View style={styles.likesContainer}>
          <Ionicons
            name="ios-heart"
            color="#ff0000"
            style={{
              fontSize: 25,
            }}
          />
          <Text style={styles.likeText}>{item.likes}</Text>
        </View>
      </View>
      <Text style={styles.description}>Description : {item.text}</Text>
    </View>
  );
}
function areEqual(prevProps, nextProps) {
  return true;
}
export default React.memo(SingleItem, areEqual);
