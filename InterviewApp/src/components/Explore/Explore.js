import React from "react";
import { ActivityIndicator } from "react-native";
import styles from "../../screens/HomeScreen/styles";
import { FlatList } from "react-native-gesture-handler";
import SingleItem from "../SingleItem/SingleItem";

export default function Explore(props) {
  const renderItem = ({ item }) => <SingleItem item={item} />;
  return props.apiData ? (
    <FlatList
      data={props.apiData.data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}      
    />
  ) : (
    <ActivityIndicator
      size="large"
      color="#788eec"
      style={styles.container}
    />
  );
}
