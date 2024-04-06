import React from "react";

import { Container, Title } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>Entrar</Title>
      <Input placeholder="Digite aqui seu email">
        <Input.Icone name={"person"} />
      </Input>
      <Input placeholder="Digite aqui sua senha">
        <Input.Icone name={"key"} />
      </Input>
      <Button title="Acessar" />
    </Container>
  );
};

export default SignIn;
