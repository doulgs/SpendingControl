import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { ButtonFilter } from "../../../components/Button-Filter";
import { InputMask } from "../../../components/InputMask";
import { Text } from "../../../components/Text";
import {
  Container,
  Content,
  ContentBtnFilter,
  Footer,
  FooterContent,
  FooterSeparator,
  Scroll,
} from "./styles";
import { Select } from "../../../components/Select";
import { dbo_Categoria, CategoriaProps } from "../../../database/dbo_Categoria";
import { InputDark } from "../../../components/Input";
import { DateTimePicker } from "../../../components/DateTimePicker";

const New: React.FC = () => {
  const { Colors } = useTheme();
  const { navigate } = useNavigation();

  const categoria = dbo_Categoria();

  const [movType, setMovType] = useState<"RECEITA" | "DESPESA">("RECEITA");
  const [valueMoney, setValueMoney] = useState<string>("");

  const [categorias, setCategorias] = useState<CategoriaProps[]>([]);
  const [selectedCategoria, setSelectedCategoria] = useState<CategoriaProps>(
    {} as CategoriaProps
  );

  const cat = [
    {
      Handle: 1,
      HandleWeb: 0,
      Nome: "Teste",
      Descricao: "Teste de Teste",
      Created_at: "",
      Updated_at: "",
      VersaoSistema: "1.0.0",
    },
  ];

  useEffect(() => {
    function getCategorias() {
      setCategorias(categoria.all());
    }
    getCategorias();
  }, []);

  return (
    <Container>
      <Scroll>
        <Content>
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
          <InputDark
            placeholder="Titulo da Movimentação"
            iconName="clipboard-outline"
            iconColor={Colors.Secondary[500]}
          />
          <Select<CategoriaProps>
            title="Selecione uma categoria"
            text="Categoria"
            options={cat}
            onChangeSelect={(value) => setSelectedCategoria(value)}
          />
          <DateTimePicker />
        </Content>
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
