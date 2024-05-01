import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { ButtonFilter } from "../../../components/Button-Filter";
import { InputMask } from "../../../components/InputMask";
import { Select } from "../../../components/Select";
import { Text } from "../../../components/Text";
import { CategoriaProps, dbo_Categoria } from "../../../database/dbo_Categoria";
import {
  Container,
  Content,
  ContentBtnFilter,
  Footer,
  FooterContent,
  FooterSeparator,
  Scroll,
} from "./styles";
/* import { dbo_Conta, ContaProps } from "../../../database/dbo_Conta"; */
import { DateTimePicker } from "../../../components/DateTimePicker";
import { InputDark } from "../../../components/Input";
import { useAuth } from "../../../contexts/authContext";
import { dbo_Movimentacao } from "../../../database/dbo_Movimentacao";
import { formatarStringParaNumber } from "../../../utils/formatarStringParaNumber";
import { obterDataHora } from "../../../utils/obterDataHora";
import { ToastAndroid } from "react-native";

const New: React.FC = () => {
  const { Colors } = useTheme();
  const navigation = useNavigation();

  const { user } = useAuth();
  /* const conta_db = dbo_Conta(); */
  const categoria_db = dbo_Categoria();
  const moviments_db = dbo_Movimentacao();

  const [movType, setMovType] = useState<"RECEITA" | "DESPESA">("RECEITA");
  const [valueMoney, setValueMoney] = useState<string>("");

  const [movDescription, setMovDescription] = useState<string>("");
  const [categorias, setCategorias] = useState<CategoriaProps[]>([]);
  /* const [contas, setContas] = useState<ContaProps[]>([]); */
  const [selectedCategoria, setSelectedCategoria] =
    useState<CategoriaProps | null>(null);
  /* const [selectedConta, setSelectedConta] = useState<ContaProps>(
    {} as ContaProps
  ); */
  const [selectedDate, setSelectedDate] = useState<string>(
    obterDataHora().dataAtualBR
  );

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
  };

  function handleCreate() {
    try {
      const value = formatarStringParaNumber(valueMoney);
      if (value === 0) {
        return;
      }
      if (movDescription === "") {
        return ToastAndroid.show("Descrição obrigatória", ToastAndroid.SHORT);
      }

      if (user && user.Handle) {
        moviments_db.create({
          Tipo: movType,
          Valor: value,
          Descricao: movDescription,
          Data: selectedDate,
          CategoriaHandle:
            selectedCategoria !== null ? selectedCategoria.Handle : 0,
          ContaHandle: 1,
          UsuarioHandle: user?.Handle,
        });
      }

      navigation.navigate("Home");
    } catch (error) {
      ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
      console.log(error);
    }
  }

  function clear_inputs() {
    setMovType("RECEITA");
    setValueMoney("");
    setMovDescription("");
    setSelectedCategoria({} as CategoriaProps);
  }

  useFocusEffect(
    useCallback(() => {
      function getCategorias() {
        try {
          setCategorias(categoria_db.all());
          /* setContas(conta_db.all()); */
        } catch (error) {
          console.log(error);
        }
      }
      getCategorias();

      return () => {
        getCategorias();
        clear_inputs();
      };
    }, [])
  );

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
            value={movDescription}
            onChangeText={(t) => setMovDescription(t)}
          />
          {/* <Select<ContaProps>
            title="Selecione uma Conta"
            text="Selecione uma Conta"
            options={contas}
            component_name="Account"
            onChangeSelect={(value) => setSelectedConta(value)}
          /> */}
          <Select<CategoriaProps>
            title="Selecione uma categoria"
            text="Selecione uma categoria"
            options={categorias}
            component_name="Category"
            onChangeSelect={(value) => setSelectedCategoria(value)}
          />
          <DateTimePicker onDateChange={handleDateChange} />
        </Content>
      </Scroll>

      <Footer>
        <FooterContent onPress={() => navigation.navigate("Home")}>
          <Text>Cancelar</Text>
        </FooterContent>
        <FooterSeparator />
        <FooterContent
          onPress={() => {
            handleCreate();
          }}
        >
          <Text>Confirmar</Text>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default New;
