import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../constants/theme";

const AppLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.second} />
    </View>
  );
};

export default AppLoader;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
};