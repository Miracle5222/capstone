import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import Topic from "./Topic";
import Lesson from "./Lesson";
import ContentScreen from "./ContentScreen";
import { ListsItems } from "../components/Lists.component";
import QuizScreen from "./QuizScreen";
import QuizHomeScreen from "./QuizHomeScreen";
import CodeScreen from "./CodeScreen";

const Topics = createNativeStackNavigator();

const LearnScreen = () => {
  return (
    <>
      <Topics.Navigator>
        <Topics.Screen name="Topic" component={Topic} />
        <Topics.Screen name="Lesson" component={Lesson} />
        <Topics.Screen name="List" component={ListsItems} />
        <Topics.Screen name="QuizHome" component={QuizHomeScreen} />
        <Topics.Screen name="ProblemCode" component={CodeScreen} />
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
