import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Container, Scroll, Title } from "./styles";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useTheme } from "styled-components/native";

const SignUp: React.FC = () => {
  const { Colors } = useTheme();

  const [termos, setTermos] = useState<boolean>(false);

  function handleCadastrar() {}

  return (
    <Scroll>
      <Container>
        <Title>Dados Pessoas</Title>
        <Input placeholder="Digite aqui seu apelido" keyboardType="default">
          <Input.Icone name={"person"} />
        </Input>

        <Input
          placeholder="Digite aqui seu nome completo"
          keyboardType="default"
        >
          <Input.Icone name={"person"} />
        </Input>

        <Input placeholder="Digite aqui seu telefone" keyboardType="number-pad">
          <Input.Icone name={"phone-portrait"} />
        </Input>

        <Title>Cadastro</Title>
        <Input placeholder="Digite aqui seu email" keyboardType="email-address">
          <Input.Icone name={"mail"} />
        </Input>

        <Input
          placeholder="Digite aqui sua senha"
          keyboardType="default"
          secureTextEntry
        >
          <Input.Icone name={"key"} />
        </Input>

        <Input
          placeholder="Cofirme sua senha"
          keyboardType="default"
          secureTextEntry
        >
          <Input.Icone name={"key-outline"} />
        </Input>

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
          onPress={handleCadastrar}
        />
      </Container>
    </Scroll>
  );
};

export default SignUp;
