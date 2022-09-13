import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import data from "./data";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Transition,
  Transitioning,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Home } from "./data";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

function HomeScreen({ navigation }) {}
const Stack = createNativeStackNavigator();

function App() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const ref = useRef();




  return (
    <>

      <Transitioning.View
        style={styles.container}
        ref={ref}
        transition={transition}
      >
        {Home.map((val, index) => {
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
                <Text style={styles.textTitle}>{val.title}</Text>
              </View>

              {index === currentIndex && (
                <>
                  {val.topic.map(({ lesson, name }, items) => (
                    <View style={styles.topics} key={items}>
                      <Text style={styles.lesson}>{lesson}</Text>
                      <Text style={styles.name}>{name}</Text>
                    </View>
                  ))}
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </Transitioning.View>
    </>
  );
}

export default App;

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
