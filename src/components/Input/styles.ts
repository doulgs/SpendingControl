import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Background[100]};
`;
export const InputText = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Textcolor[700]};
`;
export const ContainerIcon = styled.View`
  width: 60px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
`;
export const Title = styled.Text`
  margin-left: ${(props) => props.theme.Size.xs};
  font-size: ${(props) => props.theme.Size.lg};
  color: ${(props) => props.theme.Colors.Textcolor[700]};
`;
