import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardScreen } from "./screen/Dashboard";
import { CartScreen } from "./screen/Carts";
import { DetailScreen } from "./screen/Details";
import { CartHeader, DashboardHeader, DetailHeader } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();
export default function App() {

  const [loaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Bold.ttf')
  });
  

  if (!loaded) {
console.log("not loaded");
    return null;
  }

  return (
    
    <PaperProvider>
      <Provider store={store}>
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
      </Provider>
    </PaperProvider>
  );
}
