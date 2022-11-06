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
  const { data, update } = useSelector((state) => state.module);

  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);
  const { subLesson, code } = useSelector((state) => state.module);
  const { offsetY } = useSelector((state) => state.scroll);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modules, setModules] = useState([]);
  const [lesson, setLesson] = useState([]);
  const [content, setContent] = useState([]);
  const [id, setId] = useState("");
  const [updateId, setUpdateId] = useState("");

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
  //   const cont = subLesson
  //     .filter((val) => {
  //       return val.lesson_id === route.params.id;
  //     })
  //     .map((val) => {
  //       return val;
  //     });

  //   setContent(cont);
  // }, []);
  // useEffect(() => {
  //   data[0].modules.map((val) => {
  //     val.topic
  //       .map((values, index) => {
  //         return values;
  //       })
  //       .filter((item) => {
  //         return item.id == id;
  //       })
  //       .map((items) => {
  //         // console.log(items);
  //         dispatch(subLessonHandler(items));
  //       });
  //   });
  // }, [id]);

  useEffect(() => {
    for (let i = 0; i < lesson.length; i++) {
      if (lesson[i].status == "done") {
        setUpdateId(lesson[i + 1].lesson_id);
      }
      fetch(
        "https://1769-2001-4455-10c-8a00-f97b-d87-b964-a70b.ap.ngrok.io/startbootstrap-sb-admin/dist/api/update.php",
        {
          method: "post",
          header: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            lesson_id: updateId,
            status: "unlock",
          }),
        }
      )
        .then((response) => response.text())
        .then((responseJson) => {
          dispatch(updateHandler());
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      // console.log(lesson[i].status);
    }
  }, []);

  useEffect(() => {
    fetch(
      "https://1769-2001-4455-10c-8a00-f97b-d87-b964-a70b.ap.ngrok.io/startbootstrap-sb-admin/dist/control/lesson.php",
      {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);
        let parse = JSON.parse(responseJson);
        // console.log(parse.data[1].lesson);

        setModules(parse.data[0].module);
        setLesson(parse.data[1].lesson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

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
                // disabled={value.status == "lock" ? true : false} //disable touchable opactity if status is false
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
                    {value.status === "done" && <Check />}
                    {value.status === "unlock" && (
                      <LockLight bg={text.primary} />
                    )}
                    {value.status === "lock" && (
                      <LockDark bg={text.secondary} />
                    )}
                  </View>

                  <Header
                    size={18}
                    color={theme ? text.dark : text.light}
                    style={{ paddingLeft: 10 }}
                  >
                    {value.title}
                  </Header>
                </View>

                {index === currentIndex && (
                  <>
                    {lesson
                      .filter((val) => {
                        return val.module_id == value.module_id;
                      })
                      .map(
                        //map data from redux
                        (
                          {
                            lesson_name,
                            lesson_id,
                            key,
                            introduction,
                            status,
                            content,
                          },
                          items
                        ) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                setId(lesson_id);
                                // console.log(content);
                                navigation.navigate("List", {
                                  // status: status,
                                  id: lesson_id,

                                  name: lesson_name,
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
                              // disabled={
                              //   !status == "lock" || status == "done"
                              //     ? false
                              //     : true
                              // } //disable touchable opactity if status is false
                              key={items}
                            >
                              <View>
                                {/* {console.log("Items: " + items)} */}
                                {/* {console.log("Topic: " + value.topic[items].status)} */}
                                <Text
                                  style={[
                                    styles.lesson,
                                    {
                                      color: theme ? text.dark : text.light,
                                    },
                                  ]}
                                >
                                  Lesson: {lesson_id}
                                </Text>
                                {introduction && (
                                  <Text
                                    style={[
                                      styles.name,
                                      { color: theme ? text.dark : text.light },
                                    ]}
                                  >
                                    {introduction}
                                  </Text>
                                )}
                                <Text
                                  style={[
                                    styles.name,
                                    { color: theme ? text.dark : text.light },
                                  ]}
                                >
                                  {lesson_name}
                                </Text>
                                <View style={styles.iconContainer}>
                                  {status === "done" && <Check />}
                                  {status === "unlock" && (
                                    <LockLight bg={text.primary} />
                                  )}
                                  {status === "lock" && (
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
