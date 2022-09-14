import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const HEIGHT = height;
const WIDTH = width;

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ bg }) => bg};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.Text`
  font-size: ${({ size }) => size + "px"};
  color: ${({ color }) => color};
`;
export const Paragraph = styled.Text`
  font-size: ${({ size }) => size + "px"};
  color: ${({ color }) => color};
  font-weight: 500;
`;
