import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import DiscoverScreen from "../screens/DiscoverScreen";

import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="home" color={tabInfo.tintColor} size={25} />;
        },
        tabBarLabel: "Home",
      },
    },
    SearchScreen: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Feather name="search" color={tabInfo.tintColor} size={25} />;
        },
        tabBarLabel: "Search",
      },
    },
    AddScreen: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require("../assets/addicon.png")}
                style={{ width: 60, height: 60 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        },
        title: "",
      },
    },
    InboxScreen: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="message-processing-outline"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        },
        tabBarLabel: "Inbox",
      },
    },
    MeScreen: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome5 name="user" color={tabInfo.tintColor} size={25} />
          );
        },
        tabBarLabel: "Me",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#555",
      style: {
        backgroundColor: "black",
        height: 60,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
