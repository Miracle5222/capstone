import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";
import { Home } from "../Data";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const LearnScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.key}
        data={Home}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate("LandingScreen")}
                activeOpacity={0.6}
                style={styles.title}
              >
                <Text style={styles.textTitle}>{item.title}</Text>
              </TouchableOpacity>
              {item.topic.map((val, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("LandingScreen")}
                    style={styles.topic}
                  >
                    <Text style={styles.lesson}>Lesson: {val.lesson}</Text>
                    <Text style={styles.name}>{val.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </>
          );
        }}
      />

      {/* <Text
        style={[
          { fontSize: theme.Fontsize.medium, color: theme.colors.secondary },
        ]}
      >
        Caren Mondejar
      </Text> */}
    </View>
  );
};

export default LearnScreen;

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
  title: {
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
  topic: {
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
});
