import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import ContactsScreen from "../screens/ContactsScreen";
import ChatScreen from "../screens/ChatScreen";
import OpenScreen from "../screens/OpenScreen";
import ShareScreen from "../screens/ShareScreen";
import MenuScreen from "../screens/MenuScreen";
import ProfileScreen from "../screens/ProfileScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const ContactsStack = createStackNavigator(
  {
    Contacts: ContactsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Contacts"
  }
);

ContactsStack.navigationOptions = {
  tabBarLabel: "Contacts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contacts" : "md-contacts"}
    />
  )
};

ContactsStack.path = "";

const ChatStack = createStackNavigator(
  {
    Chat: ChatScreen,
    Open: OpenScreen
  },
  {
    initialRouteName: "Chat"
  }
);

ChatStack.navigationOptions = {
  tabBarLabel: "Chat",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatbubbles" : "md-chatbubbles"}
    />
  )
};

ChatStack.path = "";

const ShareStack = createStackNavigator({ Share: ShareScreen }, config);

ShareStack.navigationOptions = {
  tabBarLabel: "Share",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-share" : "md-share"}
    />
  )
};

ShareStack.path = "";

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen
  },
  config
);

MenuStack.navigationOptions = {
  tabBarLabel: "Menu",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
    />
  )
};

MenuStack.path = "";

const tabNavigator = createBottomTabNavigator({
  ContactsStack,
  ChatStack,
  ShareStack,
  MenuStack
});

tabNavigator.path = "";

export default tabNavigator;
