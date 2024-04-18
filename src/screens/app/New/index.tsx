import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { ButtonFilter } from "../../../components/Button-Filter";
import { InputMask } from "../../../components/InputMask";
import { Text } from "../../../components/Text";
import {
  Container,
  ContentBtnFilter,
  Footer,
  FooterContent,
  FooterSeparator,
  Scroll,
} from "./styles";

const New: React.FC = () => {
  const { Colors } = useTheme();
  const { navigate } = useNavigation();
  const [movType, setMovType] = useState<"RECEITA" | "DESPESA">("RECEITA");
  const [valueMoney, setValueMoney] = useState<string>("");

  return (
    <Container>
      <Scroll>
        <InputMask
          placeholder="R$ 0,00"
          value={valueMoney}
          onChangeText={(t) => setValueMoney(t)}
        />
        <ContentBtnFilter>
          <ButtonFilter
            title="DESPESA"
            type="DESPESA"
            onPress={() => setMovType("DESPESA")}
            isActive={movType === "DESPESA"}
          />
          <ButtonFilter
            title="RECEITA"
            type="RECEITA"
            onPress={() => setMovType("RECEITA")}
            isActive={movType === "RECEITA"}
          />
        </ContentBtnFilter>
      </Scroll>

      <Footer>
        <FooterContent onPress={() => navigate("Home")}>
          <Text>Cancelar</Text>
        </FooterContent>
        <FooterSeparator />
        <FooterContent>
          <Text>Confirmar</Text>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default New;
