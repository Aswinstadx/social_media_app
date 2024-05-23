import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen"
import NotificationScreen from "../screens/NotificationScreen"
import UserScreen from "../screens/UserScreen"
import ProfileScreen from "../screens/ProfileScreen"

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

const LandingPage = () => {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
};

export default LandingPage;
