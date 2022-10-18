import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { useTheme } from "@rneui/themed";
import { Home } from "../Data";
import Topic from "./Topic";
import Lesson from "./Lesson";
import { ListsItems } from "../components/Lists.component";
import { LessonContent } from "./LessonContent";

const Topics = createNativeStackNavigator();

const LearnScreen = () => {
  return (
    <>
      <Topics.Navigator>
        <Topics.Screen name="Topic" component={Topic} />
        <Topics.Screen name="Lesson" component={Lesson} />
        <Topics.Screen name="List" component={ListsItems} />
      </Topics.Navigator>
    </>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
