import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";
import { useTheme } from "styled-components/native";
import { formatarParaMoeda } from "../../utils/formatarParaMoeda";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import {
  BalanceContainer,
  BoxIcon,
  Container,
  ContainerBalance,
  ContainerExpense,
  ContainerIncome,
  Content,
  ContentInfo,
  ContentInfoMov,
  Image,
  Overlay,
} from "./styles";

type HeaderProps = {
  children?: ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <>
      <Container>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/Background-Header.png")}
        >
          <Overlay>
            <Content>
              <ContentInfo>
                <Text size={24}>Olá, Douglas</Text>
                <Text>Mantenha suas contas em dia</Text>
              </ContentInfo>
              <Avatar />
            </Content>
          </Overlay>
        </Image>
      </Container>

      {children}
    </>
  );
}

type BalanceProps = {
  Balance: number;
  Income: number;
  Expense: number;
};

function HeaderBalance({ Balance = 0, Income = 0, Expense = 0 }: BalanceProps) {
  const { Colors, ElevationLevel } = useTheme();
  return (
    <BalanceContainer>
      <ContainerBalance>
        <BoxIcon style={{ elevation: ElevationLevel.md }}>
          <Feather name="dollar-sign" size={32} color={Colors.Gray[50]} />
        </BoxIcon>
        <Text>
          Saldo atual {`\n`}
          <Text size={24}>{formatarParaMoeda(Balance)}</Text>
        </Text>
      </ContainerBalance>
      <ContentInfoMov>
        <ContainerIncome>
          <BoxIcon style={{ elevation: ElevationLevel.md }}>
            <Feather name="dollar-sign" size={32} color={Colors.Success} />
          </BoxIcon>
          <Text>
            Entradas {`\n`}
            <Text>{formatarParaMoeda(Income)}</Text>
          </Text>
        </ContainerIncome>
        <ContainerExpense>
          <BoxIcon style={{ elevation: ElevationLevel.md }}>
            <Feather name="dollar-sign" size={32} color={Colors.Error} />
          </BoxIcon>
          <Text>
            Saidas {`\n`}
            <Text>{formatarParaMoeda(Expense)}</Text>
          </Text>
        </ContainerExpense>
      </ContentInfoMov>
    </BalanceContainer>
  );
}

Header.Balance = HeaderBalance;

export { Header };
