import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Background[100]};
`;
export const InputText = styled.TextInput`
  flex: 1;
  padding: 10px 10px 10px 2px;
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Textcolor[700]};
`;
export const ContainerIcon = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
`;
export const MessageError = styled.Text`
  font-weight: 600;
  margin-left: ${(props) => props.theme.Size.xs};
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Error};
`;
