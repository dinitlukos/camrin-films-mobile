import { StyleSheet, Dimensions } from "react-native";

export const signInStyles = (theme) => {
  const styles = StyleSheet.create({
    bgImage: {
      flex: 1,
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    container: {
      padding: 32,
      alignItems: "center",
      // padding: 32,
      color: "#ffffff",
    },
  });

  return styles;
};