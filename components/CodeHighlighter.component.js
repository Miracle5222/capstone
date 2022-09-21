import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter"; // 2.0.0
import { atomOneLight } from "react-syntax-highlighter/styles/prism"; // 7.0.1
import * as Clipboard from "expo-clipboard";
import { Inter_100Thin } from "@expo-google-fonts/inter";

export const Highlighter = ({ children, language }, props) => {
  return (
    <>
      <SyntaxHighlighter
        {...props}
        style={atomOneLight}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        customStyle={{
          borderRadius: 8,
          padding: 20,
          margin: 0,
          height: 250,
        }}
        language={language}
        fontSize={14}
        highlighter="prism"
      >
        {children}
      </SyntaxHighlighter>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
