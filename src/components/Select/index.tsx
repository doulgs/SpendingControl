import { Entypo, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, FlatList, Modal } from "react-native";
import {
  BodyModal,
  BoxIcon,
  BoxInfo,
  ButtonClose,
  Container,
  ContainerBox,
  ContainerModal,
  FloatingBottao,
  HeaderModal,
  Text,
  TextHeader,
  Touchable,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Text as Txt } from "../Text";

// Defina um tipo genérico para o SelectProps
type SelectProps<T> = {
  title: string;
  text: string;
  component_name?: "Account" | "Category";
  options: T[]; // Altere o nome da propriedade para options
  onChangeSelect: (item: T) => void;
};

// Use o tipo genérico dentro do componente
export const Select = <T extends { Nome: string; Descricao?: string }>({
  title,
  text,
  component_name,
  options,
  onChangeSelect,
}: SelectProps<T>) => {
  const { Colors } = useTheme();
  const { navigate } = useNavigation();
  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

  function renderLista({ item }: { item: T }) {
    return (
      <Touchable
        onPress={() => {
          setTxt(`Categoria ${item.Nome}`);
          onChangeSelect(item);
          setModalVisible(false);
        }}
      >
        <BoxIcon>
          {txt === `Categoria ${item.Nome}` ? (
            <Ionicons name="bookmark" size={24} color={Colors.Secondary[500]} />
          ) : (
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={Colors.Secondary[500]}
            />
          )}
        </BoxIcon>

        <BoxInfo>
          <Txt size={24}>
            {item.Nome}
            {`\n`}
            <Txt>{item.Descricao}</Txt>
          </Txt>
        </BoxInfo>
      </Touchable>
    );
  }

  function handleNavigation() {
    switch (component_name) {
      case "Account":
        setModalVisible(false);
        navigate("Account");
        break;
      case "Category":
        setModalVisible(false);
        navigate("Category");
        break;
      default:
        Alert.alert(
          "Navegação",
          "Rota não disponivel, Por Favor entre em contato com o administrador do sistema."
        );
    }
  }

  return (
    <>
      <Container onPress={() => setModalVisible(true)}>
        <ContainerBox>
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={Colors.Secondary[500]}
          />
          <Txt numberOfLines={1}>{txt}</Txt>
        </ContainerBox>
        <Entypo name="select-arrows" size={24} color={Colors.Secondary[500]} />
      </Container>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <ContainerModal>
          <HeaderModal>
            <TextHeader>{title}</TextHeader>
            <ButtonClose onPress={() => setModalVisible(false)}>
              <TextHeader>X</TextHeader>
            </ButtonClose>
          </HeaderModal>
          <FloatingBottao onPress={handleNavigation}>
            <Entypo name="plus" size={24} color="black" />
          </FloatingBottao>
          <BodyModal>
            <FlatList
              data={options}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={renderLista}
            />
          </BodyModal>
        </ContainerModal>
      </Modal>
    </>
  );
};
