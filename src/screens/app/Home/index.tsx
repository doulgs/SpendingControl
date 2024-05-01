import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Header } from "../../../components/Header";
import { useAuth } from "../../../contexts/authContext";
import {
  MovimentacaoProps,
  dbo_Movimentacao,
} from "../../../database/dbo_Movimentacao";
import { Container } from "./styles";
import { List } from "../../../components/List";
import { Text } from "../../../components/Text";

const Home: React.FC = () => {
  const { user } = useAuth();
  const moviments_db = dbo_Movimentacao();

  const [moviments, setMoviments] = useState<MovimentacaoProps[]>([]);
  const [Balance, setBalance] = useState<number>(0);
  const [Income, setIncome] = useState<number>(0);
  const [Expanse, setExpanse] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      const getMoviment = () => {
        try {
          if (user && user.Handle !== undefined) {
            const retorno = moviments_db.searchAllByUser(user.Handle);
            const balance = moviments_db.getTotalMovimets(user.Handle);
            if (retorno && balance) {
              setBalance(balance.totalBalance);
              setIncome(balance.totalIncome.Total);
              setExpanse(balance.totalExpanse.Total);
              setMoviments(retorno);
            }
          }
        } catch (error) {
          console.log(error);
        }
      };
      getMoviment();
    }, [])
  );

  const renderUser = (moviments: MovimentacaoProps) => {
    return (
      <Text>
        {moviments.Descricao} - {moviments.Tipo} - {moviments.Valor} -{" "}
        {moviments.Data} - {moviments.CategoriaHandle}
      </Text>
    );
  };

  return (
    <Container>
      <Header>
        <Header.Balance Balance={Balance} Income={Income} Expense={Expanse} />
      </Header>
      <List data={moviments} renderItem={renderUser} />
    </Container>
  );
};

export default Home;
