import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex: 1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.Size.md};
  padding: 0 ${(props) => props.theme.Size.md};
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
`;
export const Modal = styled.Modal``;
export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ModalView = styled.View`
  margin: 20px;
  background-color: ${(props) => props.theme.Colors.Dark[800]};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 30px;
  width: 90%;
`;
export const ButtonClose = styled.TouchableOpacity`
  padding: 22px 0;
  margin: 22px 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.Colors.Dark[800]};
`;
