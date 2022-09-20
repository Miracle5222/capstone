import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import logo from "../assets/symbols.png";
import {
  Container,
  Header,
  Paragraph,
  Spacer,
} from "../src/styled/Container.style";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import { Highlighter } from "./CodeHighlighter.component";
import { Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { ButonIndicator } from "./ButonIndicator.component";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Exit } from "../src/icons/Icons";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

export const ListsItems = ({ navigation }, props) => {
  const { data } = useSelector((state) => state.module);
  const { content, contentId } = useSelector((state) => state.content);
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisibility] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

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
  }, [navigation, contentId]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value),
    };
  });

  return (
    <Container
      bg={theme ? lightBg.primary : darkBg.primary}
      style={{ justifyContent: "center", width: WIDTH, height: HIEGHT }}
    >
      {/* <ButonIndicator content={content} /> */}

      {visible && (
        <Animated.View style={[styles.modalContainer, animatedStyles]}>
          <TouchableOpacity
            onPress={() => {
              setVisibility(!visible);
              visible ? (opacity.value = 0) : (opacity.value = 1);
            }}
            style={styles.exit}
          >
            <Exit />
          </TouchableOpacity>
          <Highlighter language="java">{modalContent.trim()}</Highlighter>
        </Animated.View>
      )}
      <FlatList
        ref={ref}
        refreshing={true}
        initialScrollIndex={index}
        data={content}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        renderItem={({ item }) => (
          <ScrollView>
            <View style={styles.contentContainer}>
              <Spacer />
              <View
                style={[
                  styles.boxContent,
                  {
                    display: item.heading.length <= 0 ? "none" : "flex",
                    backgroundColor: theme
                      ? lightBg.fortiary
                      : darkBg.secondary,
                  },
                ]}
              >
                <Paragraph color={theme ? text.dark : text.light} size={14}>
                  {item.heading.trim()}
                </Paragraph>
              </View>

              <Spacer />
              {item.image.map((_, index) => {
                return (
                  <Image
                    key={index}
                    style={{
                      display: item.image.length <= 0 ? "none" : "flex",
                      width: contentId === "2.1" ? "90%" : "100%",
                      height: contentId === "2.1" ? 180 : 400,
                    }}
                    resizeMode="contain"
                    source={item.image[index]}
                  />
                );
              })}

              {item.code.map((val, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setModalContent(val.textCode);
                      setVisibility(!visible);
                      visible ? (opacity.value = 0) : (opacity.value = 1);
                    }}
                    activeOpacity={0.9}
                    key={index}
                    style={[
                      styles.boxContent,
                      {
                        backgroundColor: theme
                          ? lightBg.fortiary
                          : darkBg.secondary,
                      },
                    ]}
                  >
                    <Highlighter language={val.language}>
                      {val.textCode.trim()}
                    </Highlighter>
                  </TouchableOpacity>
                );
              })}
              <Spacer />
              <View
                style={[
                  styles.boxContent,
                  {
                    display: item.paragraph.length <= 0 ? "none" : "flex",
                    backgroundColor: theme
                      ? lightBg.fortiary
                      : darkBg.secondary,
                  },
                ]}
              >
                <Paragraph color={theme ? text.dark : text.light} size={14}>
                  {item.paragraph.trim()}
                </Paragraph>
              </View>

              {/* buttons */}
              {/* <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={backHandler}>
                  <Paragraph color={text.light} size={16}>
                    Back
                  </Paragraph>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextHandler}>
                  <Paragraph color={text.light} size={16}>
                    Next
                  </Paragraph>
                </TouchableOpacity>
              </View>
               */}
              <View style={styles.buttonContainer}>
                <Button>
                  <Paragraph color={text.light} size={16}>
                    Back
                  </Paragraph>
                </Button>
                <Button>
                  <Paragraph color={text.light} size={16}>
                    Next
                  </Paragraph>
                </Button>
              </View>
            </View>
            <Spacer />
          </ScrollView>
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
    height: HIEGHT + 60,
    paddingBottom: 30,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,

    flexDirection: "row",
  },
  boxContent: {
    width: "90%",
    backgroundColor: "#131313",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalContainer: {
    zIndex: 99,
    position: "absolute",
    top: 40,
    height: "auto",
    width: "90%",
  },
  exit: {
    zIndex: 99,
    position: "absolute",
    height: 30,
    width: 30,
    right: 20,
  },
});
