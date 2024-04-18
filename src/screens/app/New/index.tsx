import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import { ButtonFilter } from "../../../components/Button-Filter";
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
  const [movType, setMovType] = React.useState<"RECEITA" | "DESPESA">(
    "RECEITA"
  );

  return (
    <Container>
      <Scroll>
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
