import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Post from "./components/Post/Post";
import Notification from "./components/Notification/Notification";
import SeachPage from "./components/SearchPage/SeachPage";
const Tab = createBottomTabNavigator();
import {
  SimpleLineIcons,
  Feather,
  EvilIcons,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SeachPage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <EvilIcons name="search" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Feather name="plus-square" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <EvilIcons name="heart" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={{ height: 25, width: 25, borderRadius: 12.5 }}
              source={require("./assets/Logo/feed1.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;
