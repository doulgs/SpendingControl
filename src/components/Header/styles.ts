import { StatusBar } from "react-native";
import styled from "styled-components/native";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  height: ${250 + (STATUS_BAR_HEIGHT ?? 0)}px;
  padding: ${STATUS_BAR_HEIGHT ?? 0}px ${(props) => props.theme.Size.md}
    ${(props) => props.theme.Size.sm} ${(props) => props.theme.Size.md};
  background-color: ${(props) => props.theme.Colors.Dark[800]};
  border-bottom-left-radius: ${(props) => props.theme.Size.lg};
  border-bottom-right-radius: ${(props) => props.theme.Size.lg};
  overflow: hidden;
`;
export const ContentHeader = styled.View`
  flex: 1;
  height: ${40}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Avatar = styled.Image`
  width: ${40}px;
  height: ${40}px;
  border-radius: 10px;
`;
export const ContentBody = styled.View`
  flex: 1;
  height: ${60}px;
  align-items: center;
  justify-content: center;
`;
export const ContentFooter = styled.View`
  flex: 1;
  height: ${40}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContentMov = styled.View`
  flex-direction: row;
`;
export const TextContent = styled.View``;
export const IconContent = styled.View`
  width: ${50}px;
  height: ${50}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.Size.sm};
`;
