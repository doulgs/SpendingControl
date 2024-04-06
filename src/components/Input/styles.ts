import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: ${(props) => props.theme.size.sm};
  background-color: ${(props) => props.theme.colors.input};
`;
export const InputText = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: ${(props) => props.theme.size.md};
  color: ${(props) => props.theme.colors.black};
`;
