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
          data={movimentos}
          renderItem={({ item }) => <MemoizedLayout data={item} />}
          estimatedItemSize={80}
        />
      </Content>
    </Container>
  );
};

export default Home;
