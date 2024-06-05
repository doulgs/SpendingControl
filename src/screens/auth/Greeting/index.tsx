import { Text } from "@/components/Text";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { Keyboard } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../../components/Button";
import SignIn from "../SignIn";
import { ConatainerForm, ConatainerImage, Container, Image } from "./styles";

const Greeting: React.FC = ({}) => {
  const { Colors } = useTheme();
  const { navigate } = useNavigation();

  const bottomSheetSignIn = useRef<BottomSheet>(null);
  const openSignIn = () => bottomSheetSignIn.current?.snapToIndex(1);
  const closeSignIn = () => bottomSheetSignIn.current?.close();
  const handleChange = useCallback((index: number) => {
    Keyboard.dismiss();
  }, []);

  return (
    <>
      <Container source={require("../../../assets/images/background-auth.png")}>
        <ConatainerImage>
          <Image
            animation={"zoomIn"}
            duration={2000}
            resizeMode="contain"
            source={require("../../../assets/images/AvatarGreeting.png")}
          />
        </ConatainerImage>

        <ConatainerForm animation={"fadeInUp"} duration={2000}>
          <Text weight="700" color="#000" size={28}>
            Monitore e Organize seus gastos de qualquer lugar.
          </Text>
          <Text weight="600">Faça login para começar</Text>

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
        snapPoints={[0.001, "50%"]}
        index={0}
        enablePanDownToClose={true}
        animationConfigs={{ duration: 500 }}
        backgroundStyle={{ backgroundColor: Colors.Background[200] }}
        onChange={handleChange}
      >
        <SignIn />
      </BottomSheet>
    </>
  );
};

export default Greeting;
