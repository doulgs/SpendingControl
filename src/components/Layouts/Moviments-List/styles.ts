import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.Size.md};
`;
export const HeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.Colors.Background[100]};
  padding-bottom: ${(props) => props.theme.Size.md};
  margin-bottom: ${(props) => props.theme.Size.md};
`;
export const LayoutContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px ${(props) => props.theme.Size.md};
  margin-bottom: ${(props) => props.theme.Size.md};
  background-color: ${(props) => props.theme.Colors.Dark[800]};
  border-radius: ${(props) => props.theme.Size.md};
  overflow: hidden;
`;
export const BoxTop = styled.View`
  position: absolute;
  top: 0px;
  padding: 2px 8px;
  border-bottom-right-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Dark[700]};
`;
export const ContentInfo = styled.View``;
export const ContentValue = styled.View``;
