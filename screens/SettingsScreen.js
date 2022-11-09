import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { changeColor } from "../redux/feature/ColorReducer";
import { Moon, Sun } from "../src/icons/Icons";

import Slider from "@react-native-community/slider";
import { fontSizeHandler } from "../redux/feature/contentReducer";

const SettingsScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );
  const { fontSize } = useSelector((state) => state.content);


  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 25 }}
          onPress={() => dispatch(changeColor())}
        >
          {theme ? (
            <Sun bg={theme ? icon.light : icon.dark} />
          ) : (
            <Moon bg={theme ? icon.light : icon.dark} />
          )}
        </TouchableOpacity>
      ),
      title: "Settings",
      headerStyle: {
        backgroundColor: theme ? lightBg.primary : darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "300",
        fontSize: 18,
      },
      headerShadowVisible: false,
      headerTintColor: theme ? text.dark : text.light, //color of title
    });
  }, [navigation, theme]);
  return (
    <Container
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
      bg={theme ? lightBg.primary : darkBg.primary}
    >
      <Text style={{ fontSize: fontSize, color: "white" }}>
        Font Size: {fontSize}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={8}
        maximumValue={36}
        value={18}
        onValueChange={(value) => dispatch(fontSizeHandler(parseInt(value)))}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </Container>
  );
};

export default SettingsScreen;
