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

//redux initial value
import {
  contentHandler,
  backHandler,
  nextHandler,
  indexInitialState,
} from "../redux/feature/contentReducer";
//styled components
import {
  Container,
  Header,
  Paragraph,
  Spacer,
} from "../src/styled/Container.style";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button.component";
//code highlighter
import { Highlighter } from "./CodeHighlighter.component";

//reanimated Import
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Exit } from "../src/icons/Icons";
import YoutubeVideo from "./Youtube.component";
//data Reducer
import {
  contentStatus,
  contentIdHandler,
  lessonStatusHandler,
  moduleStatusHandler,
  dataHandler,
} from "../redux/feature/dataReducer";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

export const ListsItems = ({ navigation, route }, props) => {
  const { data } = useSelector((state) => state.module);
  const { contentId } = useSelector((state) => state.module);
  // const { index } = useSelector((state) => state.content);
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );
  const [isready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const [visible, setVisibility] = useState(false);
  const [visible1, setVisibility1] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const opacity = useSharedValue(0);
  const dispatch = useDispatch();

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("data", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("data");
  //     const result = jsonValue != null ? JSON.parse(jsonValue) : null;
  //     // setStorage(result);
  //     dispatch(dataHandler(result));
  //     // console.log(result[0].modules[0].topic);
  //     result[0].modules[0].topic.map((value, index) => {
  //       console.log(value.status);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginRight: 25 }}
          onPress={() => {
            dispatch(indexInitialState());
            navigation.goBack();
          }}
        >
          <Paragraph color={theme ? text.dark : text.light} size={16}>
            Back
          </Paragraph>
        </TouchableOpacity>
      ),

      headerShown: true,
      title: `Lesson: ${route.params.id}`,
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

  useEffect(() => {
    // console.log(route.params.name);
    dispatch(contentIdHandler(route.params.id));
    if (route.params.name === "Quiz") {
      navigation.replace("Quiz", {
        id: route.params.id,
        name: route.params.name,
      });
    }
  }, []);

  // useEffect(() => {
  //   dispatch(indexInitialState());
  // }, []);
  // useEffect(() => {
  //   dispatch(contentIdHandler(route.params.id));
  // }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value),
    };
  });

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      // viewPosition: 0,
    });
  }, [index]);

  return (
    <Container
      bg={theme ? lightBg.primary : darkBg.primary}
      style={{
        justifyContent: "center",
        width: WIDTH,
        height: HIEGHT,
      }}
    >
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
          <Highlighter
            language="java"
            height={modalContent.length < 800 ? "auto" : 300}
          >
            {modalContent.trim()}
          </Highlighter>
        </Animated.View>
      )}
      {visible1 && (
        <Animated.View style={[styles.modalContainer, animatedStyles]}>
          <TouchableOpacity
            onPress={() => {
              setVisibility1(!visible1);
              visible1 ? (opacity.value = 0) : (opacity.value = 1);
            }}
            style={styles.exit}
          >
            <Exit />
          </TouchableOpacity>
          <Text>Hello WOrld</Text>
        </Animated.View>
      )}

      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={route.params.content}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        onScrollToIndexFailed={(info) => {
          // console.log(info);
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            ref.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        renderItem={({ item }) => (
          <ScrollView style={styles.con}>
            <View style={styles.contentContainer}>
              <Spacer />
              <View
                style={[
                  styles.boxContent,
                  {
                    display: item.video.length <= 0 ? "none" : "flex",
                    backgroundColor: theme
                      ? lightBg.fortiary
                      : darkBg.secondary,
                  },
                ]}
              >
                <YoutubeVideo id={item?.video} />
              </View>

              <Spacer />
              <View
                style={[
                  styles.boxContent,
                  {
                    display: item?.heading.length <= 0 ? "none" : "flex",
                    backgroundColor: theme
                      ? lightBg.fortiary
                      : darkBg.secondary,
                  },
                ]}
              >
                <Paragraph color={theme ? text.dark : text.light} size={14}>
                  {item?.heading.trim()}
                </Paragraph>
              </View>

              <Spacer />
              {item.image.map((_, index) => {
                return (
                  <Image
                    key={index}
                    style={{
                      display: item?.image.length <= 0 ? "none" : "flex",
                      width: contentId === "2.1" ? "90%" : "100%",
                      height:
                        contentId[0] === "2"
                          ? 180
                          : 400 && contentId[0] === "4"
                          ? 180
                          : 400 && contentId[0] === "5"
                          ? 180
                          : 400 && contentId[0] === "6"
                          ? 180
                          : 400,
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
                      setModalContent(val?.textCode);
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
                    <Highlighter
                      language={val?.language}
                      height={val?.textCode.trim().length < 100 ? "auto" : 180}
                    >
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
                  {item?.paragraph.trim()}
                </Paragraph>
              </View>

              {/* buttons */}

              <View style={styles.buttonContainer}>
                {index === 0 ? (
                  <View></View>
                ) : (
                  <Button
                    event={() => {
                      if (index === 0) {
                        return;
                      }
                      setIndex(index - 1);
                      // dispatch(backHandler());
                    }}
                  >
                    <Paragraph color={text.light} size={16}>
                      Back
                    </Paragraph>
                  </Button>
                )}

                <Button
                  event={() => {
                    if (index === route.params.content.length - 1) {
                      dispatch(moduleStatusHandler(route.params.id));
                      // dispatch(indexInitialState());
                      // storeData();
                      navigation.goBack();
                    }

                    // dispatch(nextHandler());
                    setIndex(index + 1);
                  }}
                >
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
    height: "100%",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    marginBottom: 50,
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
  circleContainer: {
    zIndex: 99,
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 30,

    width: "90%",
  },
  circle: {
    marginHorizontal: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
