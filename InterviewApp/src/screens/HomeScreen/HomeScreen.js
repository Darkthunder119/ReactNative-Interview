import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/Profile/Profile";
import Explore from "../../components/Explore/Explore";
import PostItem from "../../components/PostItem/PostItem";

const Tab = createBottomTabNavigator();
const API_URL = "https://dummyapi.io/data/api/post?limit=10";

export default function HomeScreen({ extraData, signOut, validateEmail,emailVerificationFirebase }) {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}`, {
      headers: { "app-id": `${process.env["EXPO_APP_ID_API"]}` },
    })
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Post Item") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#788eec",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Profile">
        {(props) => (
          <Profile {...props} extraData={extraData} signOut={signOut} emailVerificationFirebase={emailVerificationFirebase}/>
        )}
      </Tab.Screen>
      <Tab.Screen name="Explore">
        {(props) => <Explore {...props} apiData={apiData}/>}
      </Tab.Screen>
      <Tab.Screen name="Post Item">
        {(props) => <PostItem {...props} extraData={extraData} validateEmail={validateEmail}/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
