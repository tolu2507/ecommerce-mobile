import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartHeader, DashboardHeader, DetailHeader } from "../components/header";
import { CartScreen } from "../screen/Carts";
import { DetailScreen } from "../screen/Details";
import { DashboardScreen } from "../screen/Dashboard";
import { CART, DASHBOARD, DETAILS } from "../constant";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
const options = [
    {header:<DashboardHeader/>,name:DASHBOARD,component:DashboardScreen},
{header:<DetailHeader/>,name:DETAILS,component:DetailScreen},
{header:<CartHeader/>,name:CART,component:CartScreen}]
    return (
        <NavigationContainer>
        <Stack.Navigator>
          {options.map(({header,component,name})=>(
          <Stack.Screen
          key={name}
            options={{ header: () => header }}
            name={name}
            component={component}
          />))}
        </Stack.Navigator>
      </NavigationContainer>
    )
}