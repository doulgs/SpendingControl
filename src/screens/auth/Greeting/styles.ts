import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.Colors.Background[900]};
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
  background-color: ${(props) => props.theme.Colors.Background[200]};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.Colors.Background[500]};
`;
