import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import Progressbar from "../components/Progressbar";
import { Inter_100Thin } from "@expo-google-fonts/inter";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { Home } from "../Data";
//icons
import { Java } from "../src/icons/Icons";
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const Topic = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Topic",
      headerStyle: {
        backgroundColor: "#0D0D0D",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      headerShadowVisible: false,
      headerTintColor: "#fff", //color of title
    });
  }, [navigation]);

  return (
    <>
      <Container>
        <View style={styles.headerBox}>
          <Header color="#fff" size={42}>
            Hello, Neil
          </Header>
          <Paragraph color="#fff" size={14}>
            Start learning your first programming language
          </Paragraph>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.boxContainer}
          onPress={() => navigation.navigate("Lesson")}
        >
          {Home.map((val, index) => {
            return (
              <Header key={index} size={24} color="#fff">
                {val.language}
              </Header>
            );
          })}
          <View style={styles.progressBar}>
            <Java />
            <Progressbar />
          </View>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Topic;

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: -180,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: 200,
    backgroundColor: "#131313",
    borderRadius: 20,
  },
  headerBox: {
    marginTop: -200,
  },

  progressBar: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",

    marginTop: -40,
    alignItems: "center",
  },
  java: {
    fontSize: 24,
    alignSelf: "center",
    color: "#fff",
    marginTop: -20,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});
