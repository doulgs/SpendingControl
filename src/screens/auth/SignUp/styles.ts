import styled from "styled-components/native";

export const Scroll = styled.ScrollView`
  background-color: ${(props) => props.theme.Colors.Background[200]};
`;

export const Container = styled.View`
  height: 100%;
  gap: ${(props) => props.theme.Size.md};
  padding: ${(props) => props.theme.Size.md};
  background-color: ${(props) => props.theme.Colors.Background[200]};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${(props) => props.theme.Size.md};
`;
