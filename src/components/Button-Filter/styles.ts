import styled from "styled-components/native";
import { ButtonFilterProps } from ".";

type ButtonProps = Pick<ButtonFilterProps, "isActive" | "type">;

export const Button = styled.Pressable<ButtonProps>`
  flex: 1;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.Size.sm};
  border-width: ${(props) => (props.isActive ? 1 : 0)}px;
  border-color: ${(props) =>
    props.type === "RECEITA"
      ? props.theme.Colors.Secondary[500]
      : props.theme.Colors.Error};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
`;
