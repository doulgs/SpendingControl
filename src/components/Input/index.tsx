import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, InputText } from "./styles";

interface Props extends TextInputProps {}

const Input: React.FC<Props> = ({ ...rest }) => {
  const { colors } = useTheme();
  return (
    <Container>
      <InputText
        placeholderTextColor={colors.inputplacholder}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />
    </Container>
  );
};

export { Input };
