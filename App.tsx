// App.tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

//THEME
import { ThemeProvider } from "styled-components/native";
import { THEME_LIGHT } from "./src/themes";

//DATABASE
import { SQLiteProvider } from "expo-sqlite/next";
//import { databaseInit } from "./src/database/databaseInit";

//Rotas da Aplicação
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={THEME_LIGHT}>
        {/* <SQLiteProvider databaseName="spendingcontrol.db" onInit={databaseInit}> */}
        <NavigationContainer>
          <StatusBar style="light" />
          <Routes />
        </NavigationContainer>
        {/* </SQLiteProvider> */}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
