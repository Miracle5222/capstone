import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { progressBar } from "../redux/feature/dataReducer";
const screenWidth = Dimensions.get("window").width;

const Progressbar = () => {
  const { baseUrl, update, result } = useSelector((state) => state.module);

  return (
    <>
      <CircularProgress
        radius={50}
        value={result}
        textColor="#0091B5"
        fontSize={14}
        valueSuffix={"%"}
        activeStrokeColor={"#0091B5"}
        inActiveStrokeColor={"#0091B5"}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={800}
        // onAnimationComplete={() => setValue(50)}
      />
    </>
  );
};

export default Progressbar;

const styles = StyleSheet.create({});
