import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { PersistGate } from "redux-persist/integration/react";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store, { persistor } from "../../store";
import Dashboard from "../screens/Dashboard";
import AddTask from "../screens/AddTask";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const AppNavigation = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <SafeAreaView>
              <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            </SafeAreaView>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="dashboard"
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="dashboard" component={Dashboard} />
                <Stack.Screen name="add" component={AddTask} />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppNavigation;
