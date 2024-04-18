import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Text } from "../Text";
import {
  Avatar,
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  ContentMov,
  IconContent,
  TextContent,
} from "./styles";
import React from "react";
import { formatarParaMoeda } from "../../utils/formatarParaMoeda";

function Header() {
  const { Colors } = useTheme();

  const [month, setMonth] = React.useState("abril");
  const [balance, setBalance] = React.useState(0);
  const [income, setIncome] = React.useState(0);
  const [expenses, setExpenses] = React.useState(0);

  React.useEffect(() => {}, [month]);

  return (
    <Container>
      <ContentHeader>
        <Avatar source={{ uri: "https://github.com/doulgs.png" }} />
        <Text size={20}>{month}</Text>
        <Avatar source={{ uri: "https://github.com/doulgs.png" }} />
      </ContentHeader>
      <ContentBody>
        <Text size={14} color={Colors.Textcolor[500]}>
          Saldo em conta
        </Text>
        <Text size={32}>{formatarParaMoeda(balance)}</Text>
        <Feather
          name="eye"
          size={24}
          color="white"
          style={{ marginVertical: 15 }}
        />
      </ContentBody>
      <ContentFooter>
        <ContentMov>
          <IconContent style={{ backgroundColor: Colors.Secondary[700] }}>
            <Feather name="dollar-sign" size={32} color="white" />
          </IconContent>
          <TextContent>
            <Text size={14} color={Colors.Textcolor[500]}>
              Receitas
            </Text>
            <Text size={20}>{formatarParaMoeda(income)}</Text>
          </TextContent>
        </ContentMov>
        <ContentMov>
          <IconContent style={{ backgroundColor: Colors.Error }}>
            <Feather name="dollar-sign" size={32} color="white" />
          </IconContent>
          <TextContent>
            <Text size={14} color={Colors.Textcolor[500]}>
              Despesas
            </Text>
            <Text size={20}>{formatarParaMoeda(expenses)}</Text>
          </TextContent>
        </ContentMov>
      </ContentFooter>
    </Container>
  );
}

export { Header };
