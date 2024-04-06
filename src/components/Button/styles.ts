import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 45px;
`;
export const Content = styled.View`
  flex: 1;
  border-radius: ${(props) => props.theme.Size.sm};
  padding: ${(props) => props.theme.Size.sm} 0;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.Colors.Textcolor[300]};
  font-size: ${(props) => props.theme.Size.md};
  font-weight: bold;
  text-transform: uppercase;
`;
export const ContainerLoading = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${(props) => props.theme.Size.md};
`;
