import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import { useEffect, useLayoutEffect } from "react";

import { Container, Header, Paragraph } from "../src/styled/Container.style";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;
import { useSelector, useDispatch } from "react-redux";

export const ListsItems = ({ navigation }, props) => {
  const { data } = useSelector((state) => state.module);
  const { content, contentId } = useSelector((state) => state.content);
  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);
  console.log(contentId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Lesson: ${contentId}`,
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
      bg={theme ? lightBg.primary : darkBg.primary}
      style={{ justifyContent: "center", width: WIDTH, height: HIEGHT }}
    >
      {/* {content.map((value, index) => {
        return (
          <View key={index}>
            <Paragraph color={theme ? text.dark : text.light} size={14}>
              {value.heading}
            </Paragraph>
          </View>
        );
      })} */}
      <FlatList
        data={content}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.contentContainer}>
            <View style={styles.boxContent}>
              <Paragraph color={theme ? text.dark : text.light} size={14}>
                {item.heading}
              </Paragraph>
            </View>
          </View>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: WIDTH,
    height: HIEGHT,
  },
  boxContent: {
    width: "90%",
    backgroundColor: "#131313",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
