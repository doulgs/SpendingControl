import { Header } from "../../../components/Header";
import { Text } from "../../../components/Text";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Header.Balance Balance={0} Income={0} Expense={0} />
      </Header>
    </Container>
  );
};

export default Home;
