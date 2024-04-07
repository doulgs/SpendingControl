import React, { useEffect, useState } from "react";

import { Container, ContainerTitle, Content, Title } from "./styles";
import { Header } from "../../../components/Header";
import { useAuth } from "../../../contexts/authContext";
import {
  dbo_Movimentacao,
  MovimentacaoProps,
} from "../../../database/dbo_Movimentacao";
import { FlashList } from "@shopify/flash-list";
import { LayoutMovimentos } from "../../../components/Layout-Movimentos";

const arrayFake = [
  {
    Handle: 1,
    HandleWeb: 0,
    HandleUsuario: 1,
    HandleCategoria: 1,
    Descricao: "OutroValor1",
    Valor: 320,
    Data: "2024-04-07T14:30:15.500Z",
    Status: "pendente",
    Created_at: "2024-04-07T14:30:15.500Z",
    Updated_at: "2024-04-07T14:30:15.500Z",
  },
  {
    Handle: 2,
    HandleWeb: 0,
    HandleUsuario: 1,
    HandleCategoria: 1,
    Descricao: "OutroValor2",
    Valor: 10000,
    Data: "2024-04-07T14:30:15.500Z",
    Status: "pendente",
    Created_at: "2024-04-07T14:30:15.500Z",
    Updated_at: "2024-04-07T14:30:15.500Z",
  },
];

const MemoizedLayout = React.memo(LayoutMovimentos);

const Home: React.FC = () => {
  const { user } = useAuth();
  const tabelaMovimentos = dbo_Movimentacao();
  const [movimentos, setMovimentos] = useState<MovimentacaoProps[]>(
    {} as MovimentacaoProps[]
  );

  useEffect(() => {
    function recuperarMovimentacao() {
      if (user && user.Handle) {
        const retorno = tabelaMovimentos.getByUser(user.Handle);
        if (retorno === null) return;
        setMovimentos(retorno);
      }
    }
    recuperarMovimentacao();
  }, [user]);

  return (
    <Container>
      <Header nameUser={user?.Apelido}>
        <Header.Info qtdContas={movimentos.length} />
      </Header>
      <Content>
        <ContainerTitle>
          <Title>Minhas Contas</Title>
        </ContainerTitle>
        <FlashList
          data={arrayFake}
          renderItem={({ item }) => <MemoizedLayout data={item} />}
          estimatedItemSize={80}
        />
      </Content>
    </Container>
  );
};

export default Home;
