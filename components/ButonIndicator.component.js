import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ButonIndicator = ({ content, setIndex, index }) => {
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );

  return (
    <View style={styles.circleContainer}>
      {content.map((_, inde) => {
        return (
          <TouchableOpacity
            key={inde}
            activeOpacity={0.8}
            onPress={setIndex(inde + 1)}
          >
            <View
              style={[styles.circle, { backgroundColor: buttons.light }]}
            ></View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
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
