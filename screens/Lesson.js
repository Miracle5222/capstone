import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@rneui/themed";
import { useLayoutEffect, useRef, useState } from "react";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { Check, LockDark, LockLight } from "../src/icons/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { scrollHandler } from "../redux/feature/scrollReducer";

import {
  Transition,
  Transitioning,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { indexInitialState } from "../redux/feature/contentReducer";
import {
  dataHandler,
  initDataHandler,
  lessonStatusHandler,
  moduleStatusHandler,
  sample,
  statusHandler,
  subLessonHandler,
  updateHandler,
} from "../redux/feature/dataReducer";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const Lesson = ({ navigation }) => {
  const { data, update, baseUrl } = useSelector((state) => state.module);

  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);
  const { subLesson, code } = useSelector((state) => state.module);
  const { offsetY } = useSelector((state) => state.scroll);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modules, setModules] = useState([]);
  const [lesson, setLesson] = useState([]);
  const [content, setContent] = useState([]);
  const [id, setId] = useState("");
  const [updateId, setUpdateId] = useState("");
  const { fontSize } = useSelector((state) => state.content);
  const { email, password, currStudent_id, student_id, currUsername } =
    useSelector((state) => state.login);

  const ref = useRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Modules",
      headerStyle: {
        backgroundColor: theme ? lightBg.primary : darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      headerShadowVisible: false,
      headerTintColor: theme ? text.dark : text.light, //color of title
    });
  }, [navigation, theme]);

  // useEffect(() => {
  //   fetch(`${baseUrl}route/content.php`, {
  //     method: "post",
  //     header: {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => response.text())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       let parse = JSON.parse(responseJson);
  //       // setContent(parse.subLesson);

  //       console.log(parse.data.sublesson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const storeData = async () => {
  //   try {
  //     const jsonValue = JSON.stringify(content);
  //     AsyncStorage.setItem("sublesson", jsonValue);
  //   } catch (e) {}
  // };

  // useEffect(() => {
  //   storeData();
  // }, []);

  useEffect(() => {
    fetch(`${baseUrl}route/modules.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // we will pass our input data to server
        student_id: student_id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);

        let parse = JSON.parse(responseJson);
        setModules(parse.data[0].module);
        setLesson(parse.data[1].lessons);
        // console.log(parse.data[0].module);
        // console.log(parse.data[1].lessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  // console.log(lesson);
  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme ? lightBg.primary : darkBg.primary },
      ]}
      // onScroll={({ nativeEvent }) => {
      //   //  get the offsetY value when scrolling  and dispatch to scrollhandler reducer
      //   dispatch(scrollHandler(nativeEvent.contentOffset.y));
      // }}
    >
      {/* <Text style={styles.label}>{offsetY}</Text> */}

      <Transitioning.View ref={ref} transition={transition} style={styles.con}>
        {
          //map data from redux
          modules.map((value, index) => {
            //map data.modules from redux
            // console.log(index);
            return (
              <TouchableOpacity
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                disabled={value.module_status == "lock" ? true : false} //disable touchable opactity if status is false
                activeOpacity={0.5}
                key={index}
              >
                <View
                  style={[
                    styles.titles,
                    {
                      backgroundColor: theme
                        ? lightBg.secondary
                        : darkBg.secondary,
                    },
                  ]}
                >
                  <View
                    style={{
                      marginLeft: 10,
                      width: 60,
                      height: 60,
                      backgroundColor: theme
                        ? lightBg.fortiary
                        : darkBg.primary,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {value.module_status === "done" && <Check />}
                    {value.module_status === "unlock" && (
                      <LockLight bg={text.primary} />
                    )}
                    {value.module_status === "lock" && (
                      <LockDark bg={text.secondary} />
                    )}
                  </View>

                  <Header
                    size={fontSize + 2}
                    color={theme ? text.dark : text.light}
                    style={{ paddingLeft: 10 }}
                  >
                    {value.module_name}
                  </Header>
                </View>

                {index === currentIndex && (
                  <>
                    {lesson

                      .filter((val) => {
                        return val.modules_Id == value.modules_Id;
                      })
                      .map(
                        //map data from redux
                        (
                          values,
                          // {
                          //   lesson_name,
                          //   lesson_id,
                          //   key,
                          //   introduction,
                          //   status,
                          //   content,
                          //   module_id,
                          // },
                          items
                        ) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                // ListItem(values);
                                setId(values.lessons);
                                // console.log(content);
                                navigation.navigate("List", {
                                  // status: status,
                                  lesson_Id: values.lesson_Id,
                                  mymodule: value.mymoduleId,
                                  lessons: values.lessons,
                                  content: values,
                                  lessonId: values.myLessons_Id,
                                  id: values.lesson_id,
                                  module_id: value.modules_Id,
                                  name: values.lesson_name,
                                  moduleTitle: value.module_name,
                                }); //pass params to ContentScreen
                              }}
                              activeOpacity={0.6}
                              style={[
                                styles.topics,
                                {
                                  backgroundColor: theme
                                    ? lightBg.secondary
                                    : darkBg.secondary,
                                },
                              ]}
                              disabled={
                                values.lesson_status == "lock" ? true : false
                              }
                              key={items}
                            >
                              <View>
                                {/* {console.log("Items: " + items)} */}
                                {/* {console.log("Topic: " + values.topic[items].status)} */}

                                {values.lesson_name === "Quiz" ? (
                                  <Text></Text>
                                ) : (
                                  <Text
                                    style={[
                                      styles.lesson,
                                      {
                                        color: theme ? text.dark : text.light,
                                        fontSize: fontSize,
                                      },
                                    ]}
                                  >
                                    Lesson: {values.lessons}
                                  </Text>
                                )}
                                {values.introduction && (
                                  <Text
                                    style={[
                                      styles.name,
                                      {
                                        color: theme ? text.dark : text.light,
                                        fontSize: fontSize,
                                      },
                                    ]}
                                  >
                                    {values.introduction}
                                  </Text>
                                )}
                                <Text
                                  style={[
                                    styles.name,
                                    {
                                      color: theme ? text.dark : text.light,
                                      fontSize: fontSize,
                                      marginTop:
                                        values.lesson_name === "Quiz" ? -20 : 0,
                                    },
                                  ]}
                                >
                                  {values.lesson_name}
                                </Text>
                                <View style={styles.iconContainer}>
                                  {values.lesson_status === "done" && <Check />}
                                  {values.lesson_status === "unlock" && (
                                    <LockLight bg={text.primary} />
                                  )}
                                  {values.lesson_status === "lock" && (
                                    <LockDark bg={text.secondary} />
                                  )}
                                </View>
                              </View>
                            </TouchableOpacity>
                          );
                        }
                      )}
                  </>
                )}
              </TouchableOpacity>
            );
          })
        }
      </Transitioning.View>
    </ScrollView>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  con: {
    paddingBottom: 50,
  },
  label: {
    paddingLeft: 12,
    color: "white",
  },
  container: {
    flex: 1,
    paddingBottom: 20,
    height: HIEGHT + 100,
    padding: 20,
  },
  box: {
    width: "90%",
  },

  titles: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "nowrap",
    flexDirection: "row",
    borderLeftColor: "#00CDBD",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderWidth: 4,
    width: "100%",
    height: 94,
  },
  topics: {
    justifyContent: "center",
    padding: 15,
    marginTop: 20,
    borderRadius: 15,
    height: 100,
    width: "90%",
    alignSelf: "flex-end",
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    height: "100%",
    justifyContent: "center",
  },
  lesson: {
    textAlign: "left",
    fontSize: 14,
  },
  name: {
    textAlign: "left",
    fontSize: 14,

    padding: 0,
  },

  //card styles from tutorial
  // cardContainer: {
  //   flexGrow: 1,
  // },
  // card: {
  //   flexGrow: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#131313",
  // },
  // body: {
  //   fontSize: 20,
  //   lineHeight: 20 * 1.5,
  //   textAlign: "center",
  //   backgroundColor: "#131313",
  // },
});
