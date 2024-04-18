import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.Colors.Background[900]};
`;
export const Scroll = styled.ScrollView`
  padding: ${(props) => props.theme.Size.md};
`;
export const ContentBtnFilter = styled.View`
  flex-direction: row;
  gap: 8px;
`;
export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 70px;
  border-top-width: 1px;
  border-color: ${(props) => props.theme.Colors.Background[500]};
`;
export const FooterContent = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const FooterSeparator = styled.View`
  width: 0;
  height: 100%;
  border-width: 0.7px;
  border-color: ${(props) => props.theme.Colors.Background[500]};
`;
