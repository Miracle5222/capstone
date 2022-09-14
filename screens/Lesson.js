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

import { useSelector, useDispatch } from "react-redux";
import { scrollHandler } from "../redux/feature/scrollReducer";

import {
  Transition,
  Transitioning,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Home } from "../Data";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const Lesson = ({ navigation }) => {
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
      onScroll={({ nativeEvent }) => {
        // get the offsetY value when scrolling  and dispatch to scrollhandler reducer
        dispatch(scrollHandler(nativeEvent.contentOffset.y));
      }}
    >
      {/* <Text style={styles.label}>{offsetY}</Text> */}
      <Transitioning.View ref={ref} transition={transition}>
        {Home.map((val) => {
          return val.modules.map((value, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                activeOpacity={0.9}
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
                  <Text
                    style={[
                      styles.textTitle,
                      { color: theme ? text.dark : text.light },
                    ]}
                  >
                    {value.title}
                  </Text>
                </View>

                {index === currentIndex && (
                  <>
                    {value.topic.map(
                      ({ lesson_name, id, introduction }, items) => (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={[
                            styles.topics,
                            {
                              backgroundColor: theme
                                ? lightBg.tertiary
                                : darkBg.secondary,
                            },
                          ]}
                          key={items}
                        >
                          <Text
                            style={[
                              styles.lesson,
                              { color: theme ? text.dark : text.light },
                            ]}
                          >
                            {id}
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
    flex: 1,
    padding: 20,
  },
  box: {
    width: "90%",
  },
  textTitle: { fontSize: 16, paddingLeft: 20 },
  titles: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",

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
