import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";
import { useLayoutEffect, useRef, useState } from "react";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { Check, LockDark, LockLight } from "../src/icons/Icons";

import { useSelector, useDispatch } from "react-redux";
import { scrollHandler } from "../redux/feature/scrollReducer";

import {
  Transition,
  Transitioning,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const Lesson = ({ navigation }) => {
  const { data } = useSelector((state) => state.module);

  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);
  const { offsetY } = useSelector((state) => state.scroll);
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Topic",
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
  }, [navigation]);

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme ? lightBg.primary : darkBg.primary },
      ]}
      // onScroll={({ nativeEvent }) => {
      //    get the offsetY value when scrolling  and dispatch to scrollhandler reducer
      //   dispatch(scrollHandler(nativeEvent.contentOffset.y));
      // }}
    >
      {/* <Text style={styles.label}>{offsetY}</Text> */}
      <Transitioning.View ref={ref} transition={transition}>
        {data.map((val) => {
          //map data from redux
          return val.modules.map((value, index) => {
            //map data.modules from redux
            return (
              <TouchableOpacity
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                // disabled={value.status ? false : true} //disable touchable opactity if status is false
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
                    {value.status ? (
                      <LockLight bg={text.primary} />
                    ) : (
                      <LockDark bg={text.secondary} />
                    )}
                  </View>

                  <Header
                    size={14}
                    color={theme ? text.dark : text.light}
                    style={{ paddingLeft: 10 }}
                  >
                    {value.title}
                  </Header>
                </View>

                {index === currentIndex && (
                  <>
                    {value.topic.map(
                      //map data from redux
                      (
                        { lesson_name, id, key, introduction, status, content },
                        items
                      ) => (
                        <TouchableOpacity
                          onPress={
                            () =>
                              navigation.navigate("ContentScreen", {
                                id: id,
                                content: content,
                              }) //pass params to ContentScreen
                          }
                          activeOpacity={0.6}
                          style={[
                            styles.topics,
                            {
                              backgroundColor: theme
                                ? lightBg.tertiary
                                : darkBg.secondary,
                            },
                          ]}
                          // disabled={status ? false : true} //disable touchable opactity if status is false
                          key={items}
                        >
                          <View>
                            <Text
                              style={[
                                styles.lesson,
                                {
                                  color: theme ? text.dark : text.light,
                                },
                              ]}
                            >
                              Lesson: {id}
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
                              {status ? (
                                <Check />
                              ) : (
                                <LockDark bg={text.secondary} />
                              )}
                            </View>
                          </View>
                        </TouchableOpacity>
                      )
                    )}
                  </>
                )}
              </TouchableOpacity>
            );
          });
        })}
      </Transitioning.View>
    </ScrollView>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  label: {
    paddingLeft: 12,
    color: "white",
  },
  container: {
    flex: 1.5,
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