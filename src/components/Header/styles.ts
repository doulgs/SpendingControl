import { StatusBar, Dimensions } from "react-native";
import styled from "styled-components/native";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const DIMENSIONS = Dimensions.get("screen").width;

export const Container = styled.View`
  flex: 1;
  height: ${185 + (STATUS_BAR_HEIGHT ?? 0)}px;
  background-color: ${(props) => props.theme.Colors.Dark[800]};
  border-bottom-left-radius: ${(props) => props.theme.Size.sm};
  border-bottom-right-radius: ${(props) => props.theme.Size.sm};
  overflow: hidden;
`;
export const Image = styled.ImageBackground`
  flex: 1;
`;
export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${STATUS_BAR_HEIGHT ?? 0}px ${(props) => props.theme.Size.md}
    ${(props) => props.theme.Size.sm} ${(props) => props.theme.Size.md};
  background-color: rgba(0, 0, 0, 0.6); /* Cor de fundo semitransparente */
`;
export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;
export const ContentInfo = styled.View``;

export const BoxIcon = styled.View`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[800]};
`;

/* HeaderBalance------------------------------------------------------------ */
/* Balance------------------------------------------------------------ */

export const BalanceContainer = styled.View`
  margin-top: -60px;
  padding: ${(props) => props.theme.Size.md};
  gap: 16px;
`;
export const ContainerBalance = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.Size.sm};
  padding: ${(props) => props.theme.Size.sm};
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
  overflow: hidden;
`;
export const ContentInfoMov = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

/* Income------------------------------------------------------------ */

export const ContainerIncome = styled.View`
  width: ${DIMENSIONS / 2 - 24}px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.Size.sm};
  padding: ${(props) => props.theme.Size.sm};
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
  overflow: hidden;
`;

/* Expense------------------------------------------------------------ */

export const ContainerExpense = styled.View`
  width: ${DIMENSIONS / 2 - 24}px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.Size.sm};
  padding: ${(props) => props.theme.Size.sm};
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
  overflow: hidden;
`;
