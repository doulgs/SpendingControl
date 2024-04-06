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
import { useNavigation } from "@react-navigation/native";

const Greeting: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <ConatainerImage>
        <Image
          animation={"zoomIn"}
          duration={2000}
          resizeMode="contain"
          source={require("../../../assets/images/AvatarGreeting.png")}
        />
      </ConatainerImage>

      <ConatainerForm animation={"fadeInUp"} duration={2000}>
        <Title>Monitore e Organize seus gastos de qualquer lugar.</Title>
        <SubTitle>Faça login para começar</SubTitle>

        <Button title="Acessar" widthPercent={80} />
      </ConatainerForm>
    </Container>
  );
};

export default Greeting;
