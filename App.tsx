// App.tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";

//FONT
import {
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts,
} from "@expo-google-fonts/lexend";
import * as SplashScreen from "expo-splash-screen";

//THEME
import { THEME } from "@/themes/light";
import { ThemeProvider } from "styled-components/native";

//DATABASE
import { SQLiteProvider } from "expo-sqlite/next";
import { databaseInit } from "./src/database/databaseInit";

//Provaiders
import { AuthProvider } from "./src/contexts/authContext";
import { BottomSheetProvider } from "@/contexts/BottomSheetContext";

//Rotas da Aplicação
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Lexend-400": Lexend_400Regular,
    "Lexend-600": Lexend_600SemiBold,
    "Lexend-700": Lexend_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SQLiteProvider databaseName="spendingcontrol.db" onInit={databaseInit}>
        <ThemeProvider theme={THEME}>
          <NavigationContainer>
            <AuthProvider>
              <BottomSheetProvider>
                <StatusBar style="auto" />
                <Routes />
              </BottomSheetProvider>
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SQLiteProvider>
    </GestureHandlerRootView>
  );
}
