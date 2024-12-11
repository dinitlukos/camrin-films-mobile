import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export const Loader = (props) => {
  const { color } = props;
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    opacity: ".2",
  },
});
