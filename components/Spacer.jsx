import React from "react";
import { View } from "react-native";

export const Spacer = (props) => {
  const { height } = props;
  return <View style={{ height: height }}></View>;
};
