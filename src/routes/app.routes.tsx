import * as React from "react";
import { useTheme } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Bibliotecas de Icons
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

//Paginas da Aplicação utilizando Stack
import Home from "../screens/app/Home";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{}} />
    </Stack.Navigator>
  );
}
