import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.Colors.Background[200]};
`;
export const Content = styled.View`
  flex: 1;
  margin: 0 ${(props) => props.theme.Size.lg};
`;
export const ContainerTitle = styled.View`
  border-bottom-width: 0.5px;
  margin-bottom: ${(props) => props.theme.Size.lg};
`;
export const Title = styled.Text`
  font-weight: 600;
  padding-bottom: ${(props) => props.theme.Size.lg};
  font-size: ${(props) => props.theme.Size.lg};
  color: ${(props) => props.theme.Colors.Textcolor[700]};
`;
