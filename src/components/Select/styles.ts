import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 50px;
  padding: 0 12px;
  font-size: 18px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
`;
export const ContainerModal = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.Colors.Background[900]};
`;
export const HeaderModal = styled.View`
  height: 70px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.Colors.Secondary[500]};
  background-color: ${(props) => props.theme.Colors.Dark[800]};
`;
export const ButtonClose = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
`;
export const BodyModal = styled.View`
  flex: 1;
`;
export const Touchable = styled.TouchableOpacity`
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-width: 0.5px;
  margin: 8px;
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[900]};
`;
export const Box = styled.View`
  margin: 8px;
  width: 24px;
  height: 24px;
  border-radius: ${(props) => props.theme.Size.sm};
  border-width: 0.5px;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: 16px;
  color: ${(props) => props.theme.Colors.Textcolor[500]};
`;
export const TextHeader = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
  color: ${(props) => props.theme.Colors.Secondary[500]};
`;
