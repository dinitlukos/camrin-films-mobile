import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from "react-native-paper";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { AuthProvider } from "@/context/AuthContext";
import StackLayout from "@/app/stack";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const fontConfig = {
  default: {
    regular: {
      fontFamily: "Poppins_400Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Poppins_500Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Poppins_300Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Poppins_100Thin",
      fontWeight: "normal",
    }
  }
};

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;
fontConfig.web = fontConfig.default;
fontConfig.default.fontFamily = "Poppins_400Regular";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#B82B3C",
    secondary: "#723A7A",
  },
  fonts: configureFonts({ config: {fontFamily: 'Poppins_600SemiBold'} }),
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <PaperProvider theme={theme}>
      <AuthProvider>
        <StackLayout />
      </AuthProvider>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
