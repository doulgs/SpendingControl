import React, { ReactNode } from "react";
import {
  Container,
  Content,
  ContentText,
  Title,
  SubTitle,
  ContainerInfo,
  TitleInfo,
} from "./styles";
import { Octicons } from "@expo/vector-icons";
import { IconLogo } from "../../assets/icons/Icon-Logo";

interface HeaderProps {
  nameUser: string | undefined;
  children: ReactNode;
}

function Header({ nameUser, children }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <ContentText>
            <Title>Olá, {nameUser}</Title>
            <SubTitle>Mantenha suas contas em dia</SubTitle>
          </ContentText>
          <Octicons name="gear" size={24} color="white" />
        </Content>
      </Container>
      {children}
    </>
  );
}

interface HeaderInfoProps {
  qtdContas?: number;
}

function HeaderInfo({ qtdContas = 0 }: HeaderInfoProps) {
  return (
    <ContainerInfo>
      <IconLogo color1="#fff" />
      <TitleInfo>
        Você tem {qtdContas} contas {"\n"} cadastrados à serem pagas
      </TitleInfo>
    </ContainerInfo>
  );
}

Header.Info = HeaderInfo;

export { Header };
