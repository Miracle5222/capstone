import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";

const SettingsScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
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
  }, [navigation]);
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
      <Paragraph color={theme ? text.dark : text.light} size={14}>
        Mary Grace Buagas
      </Paragraph>
    </Container>
  );
};

export default SettingsScreen;
