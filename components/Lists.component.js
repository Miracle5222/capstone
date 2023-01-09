import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Button,
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
import Buttons from "./Button.component";
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
  subLessonHandler,
  updateHandler,
} from "../redux/feature/dataReducer";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video, AVPlaybackStatus } from "expo-av";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

export const ListsItems = ({ navigation, route }) => {
  const { subLesson, code } = useSelector((state) => state.module);
  const { data, baseUrl } = useSelector((state) => state.module);
  const { contentId } = useSelector((state) => state.module);
  // const { index } = useSelector((state) => state.content);
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );
  const [isReady, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const [visible, setVisibility] = useState(false);
  const [visible1, setVisibility1] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const opacity = useSharedValue(0);
  const dispatch = useDispatch();
  const [content, setContent] = useState([]);
  const { fontSize } = useSelector((state) => state.content);
  const { codes, setCodes } = useState([]);
  const [snippets, setSnippets] = useState([]);
  const video = useRef(null);
  const [status, setStatus] = useState({});

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
      title: `Lesson: ${route.params.lessons}`,
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
    dispatch(contentIdHandler(route.params.lessons));
    fetch(`${baseUrl}route/content.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // we will pass our input data to server
        lesson_Id: route.params.lesson_Id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);
        let parse = JSON.parse(responseJson);
        setContent(parse.data[0].sublesson);
        setSnippets(parse.data[1].snippets);
        // console.log(parse.data[0].subLesson);
        // console.log(parse.data[1].snippets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   data[0].modules.map((val) => {
  //     val.topic.map((values, index) => {
  //       if (values.id === route.params.lessons) {
  //         values.content.map((value) => {
  //           value?.code.map((vals) => {
  //             console.log(vals);
  //             // return vals;
  //             // setCode(vals);
  //           });
  //         });
  //       }
  //     });
  //   });
  // }, []);

  useEffect(() => {
    if (route.params.name.trim() === "Quiz") {
      navigation.replace("QuizHome", {
        lessonId: route.params.lessonId,
        name: route.params.name,
        module_id: route.params.module_id,
        moduleTitle: route.params.moduleTitle,
        mymodule: route.params.mymodule,
      });
    }
    return () => null;
  }, []);

  // useEffect(() => {
  //   console.log(route.params.lessonId);
  //   console.log(route.params.name);
  //   console.log(route.params.module_id);
  //   console.log(route.params.moduleTitle);
  //   console.log(route.params.mymodule);
  // }, []);

  const updateLesson = () => {
    fetch(`${baseUrl}/route/updatelesson.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        lesson_id: route.params.lessonId,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(updateHandler());

        // let parse = JSON.parse(responseJson);
        // // dispatch(codeHandler(parse.code));
        // setTextValue(parse.code);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   data[0].modules.map((val) => {
  //     val.topic.map((values, index) => {
  //       if (values.id === route.params.lessons) {
  //         dispatch(subLessonHandler(values.content));
  //       }
  //     });
  //   });
  // }, [subLesson]);

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
          {/* <Text>Hello WOrld</Text> */}
        </Animated.View>
      )}

      {content.length != 0 ? (
        <FlatList
          ref={ref}
          initialScrollIndex={index}
          data={content}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          onScrollToIndexFailed={(info) => {
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
                      backgroundColor: theme
                        ? lightBg.fortiary
                        : darkBg.secondary,
                    },
                  ]}
                >
                  <Paragraph
                    color={theme ? text.dark : text.light}
                    size={fontSize + 2}
                  >
                    {route.params.name}
                  </Paragraph>
                </View>
                <Spacer />
                <View
                  style={[
                    // styles.boxContent,
                    {
                      display: item.video.length <= 0 ? "none" : "flex",
                      // backgroundColor: theme
                      //   ? lightBg.fortiary
                      //   : darkBg.secondary,
                      width: "100%",

                      borderRadius: 10,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    },
                  ]}
                >
                  <Video
                    ref={video}
                    style={{ height: 200 }}
                    source={{
                      uri: `${baseUrl}uploads/videos/${item.video}`,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  />

                  {/* <YoutubeVideo id={item?.video} /> */}
                </View>
                <Spacer />
                <View
                  style={[
                    styles.boxContent,
                    {
                      display:
                        item?.header.trim().length <= 0 ? "none" : "flex",
                      backgroundColor: theme
                        ? lightBg.fortiary
                        : darkBg.secondary,
                    },
                  ]}
                >
                  <Paragraph
                    color={theme ? text.dark : text.light}
                    size={fontSize}
                  >
                    {item?.header.trim()}
                  </Paragraph>
                </View>
                <Spacer />
                {item?.images ? (
                  <Image
                    key={index}
                    style={{
                      display: "flex",
                      width: route.params.id === "2.1" ? "90%" : "100%",
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
                    // source={item.images[index]}
                    // "https://2f0e-110-54-225-96.ap.ngrok.io/finalCapstone/Elearning/uploads/images/f1.jpg
                    source={{
                      uri: `${baseUrl}uploads/images/${item.images}`,
                    }}
                  />
                ) : (
                  <></>
                )}

                {/* {item.images ? (
                  item.images.map((_, index) => {
                    return (
                      <Image
                        key={index}
                        style={{
                          display: "flex",
                          width: route.params.id === "2.1" ? "90%" : "100%",
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
                        // source={item.images[index]}
                        // "https://2f0e-110-54-225-96.ap.ngrok.io/finalCapstone/Elearning/uploads/images/f1.jpg
                        source={{
                          uri: `${baseUrl}uploads/images/${item.images}`,
                        }}
                      />
                    );
                  })
                ) : (
                  <View></View>
                )} */}
                {snippets.map((vallue, index) => {
                  if (vallue.sublesson_Id == item.sublesson_Id) {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setModalContent(vallue?.snippets);
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
                          language={vallue?.languageName}
                          height={
                            vallue?.snippets.trim().length < 100 ? "auto" : 180
                          }
                        >
                          {vallue.snippets.trim()}
                        </Highlighter>
                      </TouchableOpacity>
                    );
                  }
                })}
                {/* {item.code ? (
                  item.code.map((val, index) => {
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
                          height={
                            val?.textCode.trim().length < 100 ? "auto" : 180
                          }
                        >
                          {val.textCode.trim()}
                        </Highlighter>
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <View></View>
                )} */}

                <Spacer />

                <View
                  style={[
                    styles.boxContent,
                    {
                      display:
                        item.paragraph.trim().length <= 0 ? "none" : "flex",
                      backgroundColor: theme
                        ? lightBg.fortiary
                        : darkBg.secondary,
                    },
                  ]}
                >
                  <Paragraph
                    color={theme ? text.dark : text.light}
                    size={fontSize}
                  >
                    {item?.paragraph.trim()}
                  </Paragraph>
                </View>

                <View style={styles.buttonContainer}>
                  {index === 0 ? (
                    <View></View>
                  ) : (
                    <Buttons
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
                    </Buttons>
                  )}

                  <Buttons
                    event={() => {
                      if (index === content.length - 1) {
                        // dispatch(moduleStatusHandler(route.params.id));
                        // dispatch(indexInitialState());
                        // storeData();
                        updateLesson();
                        navigation.goBack();
                      }

                      // dispatch(nextHandler());
                      setIndex(index + 1);
                    }}
                  >
                    <Paragraph color={text.light} size={16}>
                      Next
                    </Paragraph>
                  </Buttons>
                </View>
              </View>
              <Spacer />
            </ScrollView>
          )}
        />
      ) : (
        <>
          <ActivityIndicator size="large" color="#00ff00" />
        </>
      )}
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
