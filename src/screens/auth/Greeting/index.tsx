import React, { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import SignIn from "../SignIn";

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

import { useTheme } from "styled-components/native";

const Greeting: React.FC = ({}) => {
  const { Colors } = useTheme();
  const { navigate } = useNavigation();

  const bottomSheetSignIn = useRef<BottomSheet>(null);
  const openSignIn = () => bottomSheetSignIn.current?.snapToIndex(1);
  const closeSignIn = () => bottomSheetSignIn.current?.close();

  return (
    <>
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

          <Button title="Acessar" widthPercent={80} onPress={openSignIn} />

          <Button
            title="Cadastrar-se"
            widthPercent={80}
            onPress={() => navigate("SignUp")}
          />
        </ConatainerForm>
      </Container>

      <BottomSheet
        ref={bottomSheetSignIn}
        snapPoints={[0.001, "40%"]}
        index={0}
        enablePanDownToClose={true}
        animationConfigs={{ duration: 500 }}
        backgroundStyle={{ backgroundColor: Colors.Background[200] }}
      >
        <SignIn />
      </BottomSheet>
    </>
  );
};

export default Greeting;
