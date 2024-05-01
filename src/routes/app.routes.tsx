import * as React from "react";
import { useTheme } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Bibliotecas de Icons
import { Octicons } from "@expo/vector-icons";

//Paginas da Aplicação utilizando Stack
import Home from "../screens/app/Home";
import Extract from "../screens/app/Extract";
import New from "../screens/app/New";
import Account from "../screens/app/Registrations/Account";
import Category from "../screens/app/Registrations/Category";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
  const { Colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.Secondary[700],
        headerStyle: {
          backgroundColor: Colors.Dark[800],
        },
      }}
    >
      <Stack.Screen
        name="StackHome"
        component={TabsRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerTitle: "Cadastrar conta" }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerTitle: "Cadastrar categoria" }}
      />
    </Stack.Navigator>
  );
}

function TabsRoutes() {
  const { Colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: Colors.Dark[800],
        },
        tabBarActiveTintColor: Colors.Secondary[700],
        tabBarInactiveTintColor: Colors.Background[500],
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="New"
        component={New}
        options={{
          headerShown: true,
          headerTitle: "Movimentação",
          headerTintColor: Colors.Secondary[700],
          headerStyle: {
            borderBottomWidth: 0.5,
            backgroundColor: Colors.Dark[800],
            borderColor: Colors.Secondary[700],
          },
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <Octicons name="log" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Extract"
        component={Extract}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="log" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
