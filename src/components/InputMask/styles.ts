import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Mask = styled(TextInputMask)`
  text-align: center;
  font-size: 40px;
  color: ${(props) => props.theme.Colors.Gray[500]};
`;
