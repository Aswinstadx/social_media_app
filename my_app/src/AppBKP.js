import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import SettingScreen from "./src/screens/SettingScreen";
import { Entypo } from "@expo/vector-icons";
import ChatScreen from "./src/screens/ChatScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ProfileScreen from "./src/screens/ProfileScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Entypo
            name="home"
            color={tabInfo.tintColor}
            size={tabInfo.focused ? 26 : 20}
          />
        ),
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: "Message",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="chatbox-outline"
            color={tabInfo.tintColor}
            size={tabInfo.focused ? 26 : 20}
          />
        ),
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: "Notification",
        tabBarIcon: (tabInfo) => (
          <MaterialIcons
            name="notifications"
            color={tabInfo.tintColor}
            size={tabInfo.focused ? 26 : 20}
          />
        ),
      },
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: "User",
        tabBarIcon: (tabInfo) => (
          <Entypo
            name="home"
            color={tabInfo.tintColor}
            size={tabInfo.focused ? 26 : 20}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: (tabInfo) => (
          <Entypo
            name="home"
            color={tabInfo.tintColor}
            size={tabInfo.focused ? 26 : 20}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#FFF" },
  }
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}
