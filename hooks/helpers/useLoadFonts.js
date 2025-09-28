import { useFonts } from "expo-font";

export default function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    InterBold: require("../../assets/fonts/Inter-Bold.ttf"),
    InterRegular: require("../../assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterLight: require("../../assets/fonts/Inter-Light.ttf"),
    InterMedium: require("../../assets/fonts/Inter-Medium.ttf"),
  });

  return fontsLoaded;
}
