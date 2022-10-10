import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

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
import { useSelector, useDispatch } from "react-redux";
import { scrollHandler } from "../redux/feature/scrollReducer";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useLayoutEffect } from "react";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );
  const { offsetY } = useSelector((state) => state.scroll);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: theme
            ? lightBg.primary
            : darkBg.secondary,
          tabBarInactiveBackgroundColor: theme
            ? lightBg.primary
            : darkBg.secondary,
          tabBarActiveTintColor: theme ? text.secondary : text.primary,
          tabBarInactiveTintColor: theme ? text.dark : text.light,
          tabBarStyle: {
            height: 75,
            display: offsetY > 0 ? "none" : "flex",

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
            tabBarIcon: () => (
              <LearnIcons bg={theme ? text.secondary : text.primary} />
            ),
          }}
          component={LearnScreen}
        />

        <Tab.Screen
          name="Code"
          options={{
            tabBarLabel: "Code",
            tabBarIcon: () => (
              <CodeIcons bg={theme ? darkBg.primary : text.light} />
            ),
          }}
          component={CodeScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => (
              <ProfileIcons bg={theme ? darkBg.primary : text.light} />
            ),
          }}
          component={ProfileScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => (
              <SettingsIcons bg={theme ? darkBg.primary : text.light} />
            ),
          }}
          component={SettingsScreen}
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
