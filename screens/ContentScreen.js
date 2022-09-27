import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListsItems } from "../components/Lists.component";
import { useState, useEffect } from "react";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { useSelector, useDispatch } from "react-redux";
import { contentHandler } from "../redux/feature/contentReducer";
import { contentStatus, contentIdHandler } from "../redux/feature/dataReducer";
const List = createNativeStackNavigator();

const ContentScreen = ({ route }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contentHandler(route.params.content));
    dispatch(contentIdHandler(route.params.id));
    dispatch(contentStatus());
  }, []);

  return (
    <>
      <List.Navigator screenOptions={{ headerShown: false }}>
        <List.Screen name="List" component={ListsItems} />
      </List.Navigator>
    </>
  );
};

export default ContentScreen;

const styles = StyleSheet.create({});
