import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.Size.lg};
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  padding-left: ${(props) => props.theme.Size.sm};
`;

export const Valor = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
