import React from "react";

import { Container, Scroll, Title } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

const SignUp: React.FC = () => {
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

        <Button title="Cadastrar" disabled />
      </Container>
    </Scroll>
  );
};

export default SignUp;
