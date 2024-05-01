import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Mask = styled(TextInputMask)`
  text-align: center;
  font-size: 40px;
  color: ${(props) => props.theme.Colors.Gray[500]};
`;
export const MessageError = styled.Text`
  font-weight: 600;
  text-align: center;
  margin-left: ${(props) => props.theme.Size.xs};
  font-size: ${(props) => props.theme.Size.md};
  color: ${(props) => props.theme.Colors.Error};
`;
