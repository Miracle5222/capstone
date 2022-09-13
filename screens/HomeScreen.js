import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LearnIcons,
  SettingsIcons,
  CodeIcons,
  ProfileIcons,
} from "../src/icons/Icons";

import { useTheme } from "@rneui/themed";

import CodeScreen from "./CodeScreen";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import LearnScreen from "./LearnScreen";
import Topic from "./Topic";
import Lesson from "./Lesson";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#171717",
          tabBarInactiveBackgroundColor: "#171717",
          tabBarActiveTintColor: "#00CDBD",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarStyle: {
            height: 75,

            borderTopWidth: 0,
          },

          tabBarLabelStyle: {
            fontSize: 14,
            paddingBottom: 10,
            marginTop: -5,
          },
        }}
      >
        <Tab.Screen
          name="Learn"
          options={{
            tabBarLabel: "Learn",
            tabBarIcon: () => <LearnIcons />,
          }}
          component={LearnScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => <SettingsIcons />,
          }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name="Code"
          options={{
            tabBarLabel: "Code",
            tabBarIcon: () => <CodeIcons />,
          }}
          component={CodeScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => <ProfileIcons />,
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
