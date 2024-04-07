import styled from "styled-components/native";
import { StatusBar } from "react-native";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  max-height: ${185 + (STATUS_BAR_HEIGHT ?? 0)}px;
  background-color: ${(props) => props.theme.Colors.Background[900]};
`;
export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => props.theme.Size.lg};
`;
export const ContentText = styled.View``;
export const Title = styled.Text`
  font-weight: 600;
  font-size: ${(props) => props.theme.Size.lg};
  color: ${(props) => props.theme.Colors.Textcolor[300]};
`;
export const SubTitle = styled.Text`
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Textcolor[300]};
`;
export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: -40px;
  max-height: 80px;
  padding: 0 40px;
  margin: 0 ${(props) => props.theme.Size.lg};
  border-radius: ${(props) => props.theme.Size.md};
  background-color: ${(props) => props.theme.Colors.Gray[700]};
`;
export const TitleInfo = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Textcolor[300]};
`;
