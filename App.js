import { StyleSheet } from "react-native";
import useLoadFonts from "./hooks/helpers/useLoadFonts";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./routes/StackNavigator";
import AppLoader from "./components/AppLoader";

export default function App() {
  const fontsLoaded = useLoadFonts();

  console.log("APP RENDER");

  if (!fontsLoaded) {
    return <AppLoader />;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
