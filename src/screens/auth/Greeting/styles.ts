import { Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

export const Container = styled.ImageBackground`
  flex: 1;
  height: ${HEIGHT}px;
  width: ${WIDTH}px;
`;

export const ConatainerImage = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(Animatable.Image)`
  width: 100%;
  height: 50%;
  left: 10px;
`;

export const ConatainerForm = styled(Animatable.View)`
  flex: 1;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${(props) => props.theme.Size.xl};
  border-top-left-radius: ${(props) => props.theme.Size.xl};
  padding: ${(props) => props.theme.Size.md};
  gap: ${(props) => props.theme.Size.lg};
  background-color: rgba(255, 255, 255, 0.5);
`;
