import styled from "styled-components/native";

interface TextProps {
  weight?: "400" | "600" | "700";
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color || "#fafafa"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity || 1};
`;

//font-family: ${({ weight }) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
