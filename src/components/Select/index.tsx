import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Modal } from "react-native";
import {
  BodyModal,
  Box,
  ButtonClose,
  Container,
  ContainerModal,
  HeaderModal,
  Text,
  TextHeader,
  Touchable,
} from "./styles";
import { useTheme } from "styled-components/native";

// Defina um tipo genérico para o SelectProps
type SelectProps<T> = {
  title: string;
  text: string;
  options: T[]; // Altere o nome da propriedade para options
  onChangeSelect: (item: T) => void;
};

// Use o tipo genérico dentro do componente
export const Select = <T extends { Nome: string; Descricao: string }>({
  title,
  text,
  options,
  onChangeSelect,
}: SelectProps<T>) => {
  const { Colors } = useTheme();
  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

  function renderLista({ item }: { item: T }) {
    return (
      <Touchable
        onPress={() => {
          setTxt(item.Nome);
          onChangeSelect(item);
          setModalVisible(false);
        }}
      >
        <Text>{item.Descricao}</Text>
        <Box>{txt === item.Descricao && <Text>X</Text>}</Box>
      </Touchable>
    );
  }

  return (
    <>
      <Container onPress={() => setModalVisible(true)}>
        <Text numberOfLines={1}>{txt}</Text>
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
