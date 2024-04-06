import React from "react";

import {
  ConatainerForm,
  Container,
  ConatainerImage,
  Image,
  Title,
  SubTitle,
} from "./styles";

import { Button } from "../../../components/Button";

const Greeting: React.FC = () => {
  return (
    <Container>
      <ConatainerImage>
        <Image
          source={require("../../../assets/images/AvatarGreeting.png")}
          resizeMode="contain"
        />
      </ConatainerImage>

      <ConatainerForm>
        <Title>Monitore e Organize seus gastos de qualquer lugar.</Title>
        <SubTitle>Faça login para começar</SubTitle>

        <Button title="Acessar" widthPercent={80} />
      </ConatainerForm>
    </Container>
  );
};

export default Greeting;
