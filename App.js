import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardScreen } from "./screen/Dashboard";
import { CartScreen } from "./screen/Carts";
import { DetailScreen } from "./screen/Details";
import { CartHeader, DashboardHeader, DetailHeader } from "./components/header";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ header: () => <DashboardHeader /> }}
            name="Dashboard"
            component={DashboardScreen}
          />
          <Stack.Screen
            options={{ header: () => <DetailHeader /> }}
            name="Details"
            component={DetailScreen}
          />
          <Stack.Screen
            options={{ header: () => <CartHeader /> }}
            name="Cart"
            component={CartScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
