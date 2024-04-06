import React, { ReactNode } from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, ContainerIcon, InputText, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  title?: string;
  children?: ReactNode;
  variant?: "SIMPLE" | "EXPOSED";
  widthPercent?: number;
}

function Input({
  title,
  variant = "SIMPLE",
  children,
  widthPercent,
  ...rest
}: Props) {
  const { Colors } = useTheme();

  const WIDTH_PERCENT: StyleProp<ViewStyle> = {
    width: widthPercent ? `${widthPercent}%` : "100%",
  };

  return (
    <Container style={WIDTH_PERCENT}>
      {children && children}
      <InputText
        placeholderTextColor={Colors.Textcolor[500]}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />
    </Container>
  );
}

interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
}

function Icon({ name, color = "#3a3a3a", size = 24 }: IconProps) {
  return (
    <ContainerIcon>
      <Ionicons name={name} size={size} color={color} />
    </ContainerIcon>
  );
}

Input.Icone = Icon;

export { Input };
