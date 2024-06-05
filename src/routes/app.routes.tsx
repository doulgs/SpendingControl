import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

//Bibliotecas de Icons
import { Icon_Home } from "@/assets/icons/Icon_Home";
import { Icon_Plus } from "@/assets/icons/Icon_Plus";
import { Icon_Receipt } from "@/assets/icons/Icon_Receipt";

//Paginas da Aplicação utilizando Stack
import { Home } from "@/screens/app/Home";
import { Movement } from "@/screens/app/Movement";
import { Summary } from "@/screens/app/Summary";
import { View } from "react-native";

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
    </Stack.Navigator>
  );
}

function TabsRoutes() {
  const { Colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.Background[900],
          tabBarInactiveTintColor: Colors.Primary[500],
          tabBarStyle: {
            backgroundColor: Colors.Background[900],
            borderTopWidth: 0,
            elevation: 0,
            height: 80,
            paddingHorizontal: 60,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon_Home color={color} size={32} />
            ),
          }}
        />
        <Tabs.Screen
          name="Movement"
          component={Movement}
          options={{
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => {
              return (
                <View>
                  <Icon_Plus size={32} />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="Summary"
          component={Summary}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon_Receipt color={color} size={32} />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
}
