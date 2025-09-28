import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useLoadFonts from "./hooks/helpers/useLoadFonts";
import { COLORS } from "./constants";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.second} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter-Regular", fontSize: 20 }}>
        Hello with custom font!
      </Text>
      <Text style={{ fontFamily: "Inter-Bold", fontSize: 22 }}>
        This is bold text
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
