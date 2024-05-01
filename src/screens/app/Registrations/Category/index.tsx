import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../../../components/Button";
import { InputDark } from "../../../../components/Input";
import { Container, Title } from "./styles";
import { dbo_Categoria } from "../../../../database/dbo_Categoria";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  Nome: string;
  Descricao: string;
};

const schema = yup.object({
  Nome: yup.string().required("Campo Nome é obrigatorio!"),
  Descricao: yup
    .string()
    .min(6, "A Descricao deve conter 6 caracteres no minimo")
    .required("Campo Descricao é obrigatorio!"),
});

const Category: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const categoria_db = dbo_Categoria();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleAcessar = (data: FormData) => {
    categoria_db.create({
      Nome: data.Nome,
      Descricao: data.Descricao,
    });
    navigate("New");
  };

  return (
    <Container>
      <Title>Titulo</Title>
      <Controller
        control={control}
        name="Nome"
        render={({ field: { value, onChange } }) => (
          <InputDark
            placeholder="De um nome para a categoria"
            value={value}
            onChangeText={onChange}
            iconName="bookmark-outline"
            errorMessage={errors.Nome?.message}
          />
        )}
      />
      <Title>Descrição</Title>
      <Controller
        control={control}
        name="Descricao"
        render={({ field: { value, onChange } }) => (
          <InputDark
            placeholder="Informe um descrição da categoria"
            value={value}
            onChangeText={onChange}
            iconName="clipboard-outline"
            errorMessage={errors.Descricao?.message}
          />
        )}
      />

      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleAcessar)}
        style={{ marginTop: 24 }}
      />
      <Button
        title="Cancelar"
        onPress={() => goBack()}
        style={{ marginTop: 8 }}
      />
    </Container>
  );
};

export default Category;
