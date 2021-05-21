import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/Profile/Profile";
import Explore from "../../components/Explore/Explore";
import PostItem from "../../components/PostItem/PostItem";
import { MY_VOTE } from "../../api/queries/election";
import { useQuery } from "@apollo/client";

const Tab = createBottomTabNavigator();
const API_URL = "https://dummyapi.io/data/api/post?limit=10";

export default function HomeScreen({
  extraData,
  signOut,
  validateEmail,
  emailVerificationFirebase,
}) {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}`, {
      headers: { "app-id": `${process.env["EXPO_APP_ID_API"]}` },
    })
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  const { data } = useQuery(MY_VOTE, {
    variables: {
      unionID: "6023f4f20328cc1d7e7f6796",
      electionID: "609ee5f10e1bc1e1cdbd5b07",
      receiptID: "93b909a3-4484-4d21-99db-279b4c537adb",
    },
  });

  console.log(data, "my_vote");
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
          <Profile
            {...props}
            extraData={extraData}
            signOut={signOut}
            emailVerificationFirebase={emailVerificationFirebase}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Explore">
        {(props) => <Explore {...props} apiData={apiData} />}
      </Tab.Screen>
      <Tab.Screen name="Post Item">
        {(props) => (
          <PostItem
            {...props}
            extraData={extraData}
            validateEmail={validateEmail}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
