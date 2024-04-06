import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: ${(props) => props.theme.Size.md};
  padding: ${(props) => props.theme.Size.md};
  background-color: ${(props) => props.theme.Colors.Background[200]};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.Size.xl};
`;
