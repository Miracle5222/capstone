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
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();

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
      headerTintColor: "#fff",
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      onScroll={({ nativeEvent }) => {
        console.log(nativeEvent.contentOffset.y);
      }}
    >
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
                <View style={styles.titles}>
                  <Text style={styles.textTitle}>{value.title}</Text>
                </View>

                {index === currentIndex && (
                  <>
                    {value.topic.map(
                      ({ lesson_name, id, introduction }, items) => (
                        <TouchableOpacity style={styles.topics} key={items}>
                          <Text style={styles.lesson}>{id}</Text>
                          <Text style={styles.name}>{introduction}</Text>
                          <Text style={styles.name}>{lesson_name}</Text>
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
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: "#0D0D0D",
  },
  box: {
    width: "90%",
  },
  textTitle: { color: "white", fontSize: 16, paddingLeft: 20 },
  titles: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#131313",
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
    backgroundColor: "#131313",
    borderRadius: 15,
    height: 100,
    width: "90%",
    alignSelf: "flex-end",
  },
  lesson: {
    textAlign: "left",
    color: "white",
    fontSize: 14,
  },
  name: { textAlign: "left", color: "white", fontSize: 14 },

  //card styles from tutorial
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#131313",
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: "center",
    backgroundColor: "#131313",
  },
});
