import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useFonts } from 'expo-font'
import AppNavigator from "./navigator/AppNavigator";
export default function App() {

  const [loaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    </PaperProvider>
  );
}
