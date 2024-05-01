import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../../../components/Button";
import { InputDark } from "../../../../components/Input";
import { Container, Title } from "./styles";
import { InputMask } from "../../../../components/InputMask";

type FormData = {
  Valor: string;
  Nome: string;
};

const schema = yup.object({
  Valor: yup.string().required("Campo Nome é obrigatorio!"),
  Nome: yup.string().required("Campo Descricao é obrigatorio!"),
});

const Account: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleAcessar = (data: FormData) => {};

  return (
    <Container>
      <Title style={{ textAlign: "center" }}>Saldo Inicial da conta</Title>
      <Controller
        control={control}
        name="Valor"
        render={({ field: { value, onChange } }) => (
          <InputMask
            placeholder="R$ 0,00"
            value={value}
            onChangeText={onChange}
            errorMessage={errors.Valor?.message}
          />
        )}
      />
      <Title>Titulo</Title>
      <Controller
        control={control}
        name="Nome"
        render={({ field: { value, onChange } }) => (
          <InputDark
            placeholder="Informe um descrição da categoria"
            keyboardType="default"
            value={value}
            onChangeText={onChange}
            iconName="bookmark-outline"
            errorMessage={errors.Nome?.message}
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
        onPress={handleSubmit(handleAcessar)}
        style={{ marginTop: 8 }}
      />
    </Container>
  );
};

export default Account;
