import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: ${(props) => props.theme.Size.md};
  padding: ${(props) => props.theme.Size.md};
  background-color: ${(props) => props.theme.Colors.Background[900]};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Textcolor[300]};
`;
