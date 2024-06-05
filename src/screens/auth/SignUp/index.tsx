import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useTheme } from "styled-components/native";
import * as yup from "yup";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useAuth } from "@/contexts/authContext";
import { Container, Scroll, Title } from "./styles";
import { Text } from "@/components/Text";

type FormData = {
  apelido: string;
  nome: string;
  celular: string;
  email: string;
  senha: string;
};

const schema = yup.object({
  apelido: yup.string().required("Campo Apelido é obrigatorio!"),
  nome: yup.string().required("Campo Nome é obrigatorio!"),
  celular: yup.string().required("Campo Celular é obrigatorio!"),
  email: yup.string().required("Campo Email é obrigatorio!"),
  senha: yup
    .string()
    .min(6, "A senha deve conter 6 caracteres no minimo")
    .required("Campo Senha é obrigatorio!"),
});

const SignUp: React.FC = () => {
  const { Colors } = useTheme();
  const { loadingAuth, cadastarUsuario } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [termos, setTermos] = useState<boolean>(false);

  const handleAlertTermos = () => {
    Alert.alert("Termos de Uso", `Os termos de uso não foram aceitos.`, [
      { text: "OK" },
    ]);
  };

  const handleCadastrar = (data: FormData) => {
    cadastarUsuario({
      Apelido: data.apelido,
      Nome: data.nome,
      Telefone: data.celular,
      Email: data.email,
      Senha: data.senha,
    });
  };

  return (
    <Scroll>
      <Container>
        <Text>Dados Pessoais</Text>
        <Controller
          control={control}
          name="apelido"
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Digite aqui seu apelido"
              keyboardType="default"
              value={value}
              onChangeText={onChange}
              iconName="person"
              errorMessage={errors.apelido?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="nome"
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Digite aqui seu nome completo"
              keyboardType="default"
              value={value}
              onChangeText={onChange}
              iconName="person"
              errorMessage={errors.nome?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="celular"
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Digite aqui seu telefone"
              keyboardType="number-pad"
              value={value}
              onChangeText={onChange}
              iconName="phone-portrait"
              errorMessage={errors.celular?.message}
            />
          )}
        />

        <Text>Dados Cadastrais</Text>
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

        <BouncyCheckbox
          size={25}
          fillColor={Colors.Primary[500]}
          text="Li e concordo com os termos de uso"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 8 }}
          textStyle={{
            fontWeight: "bold",
            textDecorationLine: "none",
            color: Colors.Textcolor[700],
          }}
          onPress={(isChecked: boolean) => setTermos(isChecked)}
        />

        <Button
          title="Cadastrar"
          disabled={!termos}
          isLoading={loadingAuth}
          onPress={termos ? handleSubmit(handleCadastrar) : handleAlertTermos}
        />
      </Container>
    </Scroll>
  );
};

export default SignUp;
