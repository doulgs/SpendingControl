import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useTheme } from "styled-components/native";
import { Container, ContainerLoading, Content, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  isLoading?: boolean;
  widthPercent?: number;
}

const Button: React.FC<Props> = ({
  title,
  color,
  isLoading,
  disabled,
  widthPercent,
  ...rest
}) => {
  const { Colors } = useTheme();

  const WIDTH_PERCENT: StyleProp<ViewStyle> = {
    width: widthPercent ? `${widthPercent}%` : "100%",
  };

  const backcolor = disabled ? Colors.Primary[800] : Colors.Primary[500];

  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      style={WIDTH_PERCENT}
      {...rest}
    >
      <Content style={{ backgroundColor: backcolor }}>
        {isLoading ? (
          <ContainerLoading>
            <ActivityIndicator color={Colors.Secondary[300]} size={22} />
            <Title>Aguarde...</Title>
          </ContainerLoading>
        ) : (
          <Title>{title}</Title>
        )}
      </Content>
    </Container>
  );
};

export { Button };
