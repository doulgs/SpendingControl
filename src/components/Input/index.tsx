import React, { ReactNode } from "react";
import { StyleProp, TextInputProps, View, ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, ContainerIcon, InputText, MessageError } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  title?: string;
  children?: ReactNode;
  variant?: "SIMPLE" | "EXPOSED";
  widthPercent?: number;
  errorMessage?: string;
  iconName: keyof typeof Ionicons.glyphMap;
  IconSize?: number;
  iconColor?: string;
}

function Input({
  title,
  variant = "SIMPLE",
  children,
  widthPercent,
  errorMessage,
  iconName,
  IconSize = 20,
  iconColor = "#6d6d6d",
  ...rest
}: Props) {
  const { Colors } = useTheme();

  const WIDTH_PERCENT: StyleProp<ViewStyle> = {
    width: widthPercent ? `${widthPercent}%` : "100%",
    borderColor: errorMessage ? Colors.Error : Colors.Textcolor[700],
  };

  const colorIcon = errorMessage ? Colors.Error : iconColor;
  const colorText = errorMessage ? Colors.Error : Colors.Textcolor[700];

  return (
    <View>
      {errorMessage && <MessageError>{errorMessage}</MessageError>}
      <Container style={WIDTH_PERCENT}>
        {iconName && (
          <ContainerIcon>
            <Ionicons name={iconName} size={IconSize} color={colorIcon} />
          </ContainerIcon>
        )}
        <InputText
          placeholderTextColor={Colors.Textcolor[500]}
          autoCapitalize="none"
          autoCorrect={false}
          style={{ paddingLeft: iconName ? 0 : 16, color: colorText }}
          {...rest}
        />
      </Container>
    </View>
  );
}

function Icon() {
  return null;
}

Input.Icone = Icon;

export { Input };
