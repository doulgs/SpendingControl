import React from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useTheme } from "styled-components/native";

import { Container, Title } from "./styles";
import { useAuth } from "../../../contexts/authContext";

type FormData = {
  email: string;
  senha: string;
};

const schema = yup.object({
  email: yup.string().required("Campo Email é obrigatorio!"),
  senha: yup
    .string()
    .min(6, "A senha deve conter 6 caracteres no minimo")
    .required("Campo Senha é obrigatorio!"),
});

const SignIn: React.FC = () => {
  const { loadingAuth, acessarApp } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleAcessar = (data: FormData) => {
    acessarApp(data.email, data.senha);
  };

  return (
    <Container>
      <Title>Entrar</Title>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder="Digite aqui seu email"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
            iconName="mail"
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder="Digite aqui sua senha"
            keyboardType="default"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            iconName="key"
            errorMessage={errors.senha?.message}
          />
        )}
      />

      <Button
        title="Acessar"
        isLoading={loadingAuth}
        onPress={handleSubmit(handleAcessar)}
      />
    </Container>
  );
};

export default SignIn;
