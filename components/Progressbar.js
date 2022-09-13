import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";

const screenWidth = Dimensions.get("window").width;

const Progressbar = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <CircularProgress
        radius={50}
        value={85}
        textColor="#0091B5"
        fontSize={14}
        valueSuffix={"%"}
        activeStrokeColor={"#0091B5"}
        inActiveStrokeColor={"#0091B5"}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={1500}
        onAnimationComplete={() => setValue(50)}
      />
    </>
  );
};

export default Progressbar;

const styles = StyleSheet.create({});
